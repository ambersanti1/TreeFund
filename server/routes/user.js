const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
require("dotenv").config();
const nodemailer = require("nodemailer");
const session = require('express-session')
// router.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: true, // Ensure this is true if your site is served over HTTPS
//       maxAge: 3600000, // Session duration in milliseconds
//       sameSite: "none", // Ensure this is set to 'none' for cross-site requests
//       httpOnly: true,
//     },
//   })
// );

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "User already exists" });
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashpassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "Record registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User is not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "Password is incorrect" });
    }

    const token = jwt.sign(
      { username: user.username },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    console.log("Generated Token:", token);
    // req.session.token = token;

    res.cookie("token", token, {
      domain: ".herokuapp.com",
      sameSite: "none",
      httpOnly: true,
      maxAge: 360000,
      secure: true,
    });
    res.setHeader("Authorization", `${token}`);
    return res.json({ status: true, message: "Login succesfully" });
  } catch (error) {
    console.error("Error:", error); // Add this line
    return res.json({ message: "Internal server error" });
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not registered" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5m",
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "carolinasandoval879@gmail.com",
        pass: "ofip vhbo spyb ffwm",
      },
    });

    const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");

    const mailOptions = {
      from: "carolinasandoval879@gmail.com",
      to: email,
      subject: "Reset password",
      text: `https://treefund-b757cb53a6e1.herokuapp.com/resetPassword/${encodedToken}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Error sending email" });
      } else {
        return res.json({ status: true, message: "Email sent" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    const id = decoded.id;
    const hashPassword = await bcrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({ status: true, message: "Updated password" });
  } catch (error) {
    return res.json("Invalid token");
  }
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token" });
      console.log("Denied");
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (error) {
    return res.json(error);
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "Authorized" });
  console.log("Authorized");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

module.exports = router;

    // res.cookie("token", token, {
    //   domain: "https://treefund-b757cb53a6e1.herokuapp.com",
    //   httpOnly: true,
    //   maxAge: 360000,
    //   secure: true,
    // });
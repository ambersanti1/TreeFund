const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require('jsonwebtoken')
const { User } = require("../models/User");
require('dotenv').config()

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
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User is not registered" });
  }
  const validPassword = await bcrypt.compare(password, user.password)
  if(!validPassword) {
    return res.json({message: "Password is incorrect"})
  }

  const token = jwt.sign({username: user.username}, process.env.JWT_SECRET_KEY, {expiresIn: '1h'})
  res.cookie('token', token, {httpOnly: true, maxAge: 360000})
  return res.json({status: true, message: 'Login succesfully'})
});

module.exports = router;

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("./routes/stripe");
const products = require("./products");
const userRouter = require("./routes/user");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "https://treefund-b757cb53a6e1.herokuapp.com",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname + "/public")));
app.use(cookieParser());
app.use("/auth", userRouter);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/authentication"
);

app.use("/api/stripe", stripe);

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

// origin: ["http://localhost:3000"],
// credentials: true,

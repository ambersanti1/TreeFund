import React, { useState } from "react";
import "../styles/Signup.css";
import "../styles/Header.css"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://treefund-b757cb53a6e1.herokuapp.com/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          toast.success("You've logged in", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          toast.error("Failed to logged in", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="header-container">
        <h1>TreeFund</h1>
        <div className="header-btns">
          <Link to="/">
            <button>
              {" "}
              Home{" "}
              <FontAwesomeIcon
                icon={faLeaf}
                style={{
                  color: "#25511f",
                  fontSize: "15px",
                }}
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Log in</h2>

          <label htmlFor="email">Email:</label>
          <input
            class = "email-login"
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="****"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log in</button>

          <div className="after-button">
            <div className="forgot">
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>

            <div className="dont">
              <p> Don't have an account? </p>
            </div>

            <div className="user">
              <Link to="/signup"> Sign up </Link>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;

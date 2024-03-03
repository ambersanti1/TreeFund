import React, { useState } from "react";
import "../styles/Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          toast.success("Successfully logged in", {
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
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <label htmlFor="email">Email:</label>
        <input
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

          <div className="Forgot">
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
  );
};

export default Login;

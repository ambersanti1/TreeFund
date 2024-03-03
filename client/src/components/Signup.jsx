import React, { useState } from "react";
import "../styles/Signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.status) {
          toast.success("Successfully sign up", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          toast.error("Failed to sign up", {
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
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          required
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          required
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          required
          type="password"
          placeholder="****"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        <div className="dont">
          <p> Already have an account? </p>
        </div>

        <div className="user">
          <Link to="/login">Log in</Link>
        </div>

        <ToastContainer />
      </form>
    </div>
  );
};

export default Signup;

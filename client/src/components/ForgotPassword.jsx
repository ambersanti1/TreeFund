import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/forgot-password", {
        email,
      })
      .then((response) => {
        if (response.data.status) {
          alert("Check your email for reset password link");
          navigate("/login");
        }
        console.log(response.data);
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
          <button>
            <Link to="/"> Home </Link>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{
                color: "#25511f",
              }}
            />
          </button>
        </div>
      </div>
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>

          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Send email</button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

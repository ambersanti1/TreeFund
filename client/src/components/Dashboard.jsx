import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../styles/dashboard.css";

import TreeHugerImage from "../Images/TreeHugerImage.webp";
import NatureSaviorImage from "../Images/NatureSaviorImage.webp";
import EvergreenEnthusiastImage from "../Images/EvergreenEnthusiastImage.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const imageMap = {
  "Tree Huger": TreeHugerImage,
  "Nature Savior": NatureSaviorImage,
  "Evergreen Enthusiast": EvergreenEnthusiastImage,
};

function Dashboard() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("https://treefund-b757cb53a6e1.herokuapp.com/auth/verify")
      .then((res) => {
        if (res.data.status) {
        } else {
          navigate("/login");
        }
        console.log(res);
      });
  }, [navigate]);
  const handleLogout = () => {
    axios
      .get("https://treefund-b757cb53a6e1.herokuapp.com/auth/logout")
      .then((res) => {
        if (res.data.status) {
          toast.info("You've logged out", {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeButton: false,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch("https://treefund-b757cb53a6e1.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="dashboard-container">
      <div className="header-container">
        <h1>TreeFund</h1>
        <div className="header-btns">
          <button className="logout" onClick={handleLogout}>
            <a>Log out </a>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{
                color: "#25511f",
                fontSize: "15px",
              }}
            />
          </button>
      </div>

      <div className="dash-container">
        <div className="title-container">
          <h2 className="color-brown join">JOIN THE</h2>
          <br />
          <h2>GREEN</h2>
          <br />
          <h2>REVOLUTION</h2>
          <br />
        </div>

        <div className="package-container">
          <div class="choose">
            <h2>Choose your package</h2>
          </div>
          <ul className="product-list">
            {data.map((product) => (
              <li key={product.id} className="product-card">
                <h3 className="product-name">{product.name}</h3>
                <img
                  className="product-image"
                  src={imageMap[product.name] || TreeHugerImage}
                  alt={product.name}
                />
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price} USD</p>
                <Checkout cartItems={[product]} />
              </li>
            ))}
          </ul>
        </div>
        <ToastContainer />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;

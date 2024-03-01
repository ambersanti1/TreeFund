import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TreeHugerImage from "../Images/TreeHugerImage.webp";
import NatureSaviorImage from "../Images/NatureSaviorImage.webp";
import EvergreenEnthusiastImage from "../Images/EvergreenEnthusiastImage.webp";

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
    axios.get("http://localhost:5000/auth/verify").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/login");
      }
      console.log(res);
    });
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout")
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
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      <h1>Join the Reforestation Revolution</h1>
      <h1>Choose your package</h1>

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
            <p className="product-price">${product.price}</p>
            <Checkout cartItems={[product]} />
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;

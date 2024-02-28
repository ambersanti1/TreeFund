import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

import Accordion from "./Accordion"
import "../styles/Accordion.css";
import Hero from "./Hero"

import '../styles/Home.css';

import TreeHugerImage from '../Images/TreeHugerImage.webp';
import NatureSaviorImage from '../Images/NatureSaviorImage.webp';
import EvergreenEnthusiastImage from '../Images/EvergreenEnthusiastImage.webp';

const imageMap = {
  "Tree Huger": TreeHugerImage,
  "Nature Savior": NatureSaviorImage,
  "Evergreen Enthusiast": EvergreenEnthusiastImage,
};

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="container-text">
        <div className="Home-text">
          <h1>Join the Reforestation Revolution</h1>
          <p> Embrace the power of unity and nature with TreeFund. Together, we can reforest the earth, one seedling at a time. Dive into a world where your contributions directly foster growth, rebuild ecosystems, and combat climate change. Let's nurture our planet back to life, creating a legacy of greenery for future generations.</p>
        </div>
      </div>

      <Hero />
      <h1>Packages</h1>
    
      <h1>Join the Reforestation Revolution</h1>
      <p> Embrace the power of unity and nature with TreeFund. Together, we can reforest the earth, one seedling at a time. Dive into a world where your contributions directly foster growth, rebuild ecosystems, and combat climate change. Let's nurture our planet back to life, creating a legacy of greenery for future generations.</p>

      <ul className="product-list">
        {data.map((product) => (
          <li key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <img className="product-image"  src={imageMap[product.name] || TreeHugerImage} alt={product.name} />
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <Checkout cartItems={[product]} />
          </li>
        ))}
      </ul>
      <Accordion />
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Checkout from "./Checkout";

import Accordion from "./Accordion";
import "../styles/Accordion.css";
import "../styles/Home.css";
import "../styles/Header.css";
import "../styles/dashboard.css";

import TreeHugerImage from "../Images/TreeHugerImage.webp";
import NatureSaviorImage from "../Images/NatureSaviorImage.webp";
import EvergreenEnthusiastImage from "../Images/EvergreenEnthusiastImage.webp";
import NatureSupremacy from "../Images/Camping_family.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const imageMap = {
  "Tree Huger": TreeHugerImage,
  "Nature Savior": NatureSaviorImage,
  "Evergreen Enthusiast": EvergreenEnthusiastImage,
  "Nature Supremacy": NatureSupremacy,
};

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://treefund-b757cb53a6e1.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="header-container">
        <h1>
          TreeFund{" "}
          <FontAwesomeIcon
            icon={faLeaf}
            style={{
              color: "#25511f",
              fontSize: "25px",
            }}
          />
        </h1>
        <div className="header-btns">
          <button>
            <a href="#donate">Donate</a>
          </button>
        </div>
      </div>

      <div className="start-page">
        <h2>Funding </h2>
        <h2> for a greener </h2> <h2>Mexico</h2>
      </div>

      <div className="content-container">
        <div className="join-donate-container">
          <div className="donate">
            <Link to="/login">
              <h2>Donate now!</h2>
              <p class="paragraph">
                {" "}
                Consider helping us fulfill our goal of 500 acres of trees
                planted this month.{" "}
              </p>
            </Link>
          </div>
          <div className="join">
            <h2>Be part of the green change in Mexico</h2>
            <p class="paragraph">
              {" "}
              Embrace the power of unity and nature with TreeFund. Together, we
              can reforest the earth, one seedling at a time. Dive into a world
              where your contributions directly faster growth, rebuild
              ecosystems, and combat climate change. Let's nurture our planet
              back to life, creating a legacy of greenery for future
              generations.
            </p>
          </div>
        </div>

        <section id="donate" className="dash-container">
          <div className="title-container">
            <h2 >JOIN THE GREEN REVOLUTION</h2>
          </div>

          <div className="package-container">
            <ul className="product-list">
              {data.map((product) => (
                <li key={product.id} className="product-card">
                  <h3 className="product-name">{product.name}</h3>
                  <img
                    className="product-image"
                    src={imageMap[product.name] || TreeHugerImage}
                    alt={product.name}
                  />
                  <p className="product-price">{product.price} USD</p>
                  <p className="product-description">{product.description}</p>
                  <Checkout cartItems={[product]} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <h2>Your Action, Natures Reaction</h2>
        <p class="paragraph">
          Unlock the power of change with every tree you plant. Witness the
          transformation. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias totam explicabo, autem incidunt in labore ea voluptate, odio quasi minima ipsam quas dignissimos placeat laboriosam maxime pariatur impedit corporis aspernatur.
        </p>

        <Accordion />
      </div>
    </>
  );
}

export default Home;

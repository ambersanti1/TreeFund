import React from "react";
import { Link } from "react-router-dom";

import Accordion from "./Accordion";
import "../styles/Accordion.css";
import Hero from "./Hero";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>

      <div className="header-container">
        <h1>TreeFund</h1>

        <div>
          <button>
            <Link to="/login"> Log in </Link>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{
                color: "#25511f",
              }}
            />
          </button>

          <button>
            <Link to="/signup"> Sign up </Link>
            <FontAwesomeIcon
              icon={faLeaf}
              style={{
                color: "#25511f",
              }}
            />
          </button>
        </div>
      </div>
    <div className="content-container">
      <h2>Planting Today, for a Greener Tomorrow</h2>
      <p>
        With your donation today, we'll make sure biodiversity in Mexico keeps
        on thriving!
      </p>

      <Hero />

      <div className="join-donate-container">
        <div className="join">
          <h2>Join the Reforestation Revolution</h2>
          <p>
            {" "}
            Embrace the power of unity and nature with TreeFund. Together, we
            can reforest the earth, one seedling at a time. Dive into a world
            where your contributions directly faster growth, rebuild ecosystems,
            and combat climate change. Let's nurture our planet back to life,
            creating a legacy of greenery for future generations.
          </p>
        </div>
        <div className="donate">
          <Link to="/login">
            <h2>Donate now!</h2>
            <p>
              {" "}
              Consider helping us fulfill our goal of 500 acres of trees planted
              this month.{" "}
            </p>
          </Link>
        </div>
      </div>

      <h2>Your Action, Natures Reaction</h2>
      <p>
        Unlock the power of change with every tree you plant. Witness the
        transformation
      </p>

      <Accordion />
    </div>
    </>
  );
}

export default Home;

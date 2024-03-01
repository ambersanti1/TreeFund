import React from "react";
import { Link } from "react-router-dom";

import Accordion from "./Accordion";
import "../styles/Accordion.css";
import Hero from "./Hero";

import "../styles/Home.css";

function Home() {
  return (
    <div>
      <button>
        <Link to="/dashboard">Plant a tree</Link>
      </button>

      <Hero />

      <h1>Join the Reforestation Revolution</h1>
      <p>
        {" "}
        Embrace the power of unity and nature with TreeFund. Together, we can
        reforest the earth, one seedling at a time. Dive into a world where your
        contributions directly foster growth, rebuild ecosystems, and combat
        climate change. Let's nurture our planet back to life, creating a legacy
        of greenery for future generations.
      </p>

      <Accordion />
    </div>
  );
}

export default Home;

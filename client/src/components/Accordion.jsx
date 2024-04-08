import '../styles/Accordion.css';
import manPlant from '../Images/Man_plant.webp';
import mexicanForest from '../Images/Mexican_Trees.webp'
import havingFun from '../Images/Having_fun.webp'
import plantingtrees from '../Images/Planting_trees.webp'
import dronePlant from '../Images/Drone_Plant.webp'
import irrigationTrees from '../Images/Irrigation_trees.webp'
import reforestTrees from '../Images/Reforest_trees.webp'
import plantationTrees from '../Images/Plantation_trees.webp'

import React, { useState, useEffect } from 'react';

const Accordion = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const itemsToRender = windowWidth < 600 ? 2 : 10;

  // Images array to dynamically create list items
  const images = [

    { src: manPlant, alt: "Man planting a tree", content: "Help plant trees!" },
    { src: mexicanForest, alt: "A reforested mexican forest", content: "Be the future!" },
    { src: havingFun, alt: "People Having Fun", content: "Secure the future!" },
    { src: plantingtrees, alt: "People Planting Trees", content: "Support the cause!" },
    { src: dronePlant, alt: "Drone Tech", content: "Fund Innovation!" },
    { src: irrigationTrees, alt: "Irrigation Tech", content: "Help grow life!" },
    { src: reforestTrees, alt: "Reforest process", content: "Donate trees today!" },
    { src: plantationTrees, alt: "Plantation in process", content: "Help us plant!" },
  ];

  return (
      <div className = "accordion-container">
        <ul className="accordion">
          {images.slice(0, itemsToRender).map((image, index) => (
            <li key={index}>
              <img src={image.src} alt={image.alt} />
              <div className="content">
                <h2>{image.content}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
};
export default Accordion;

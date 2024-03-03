import '../styles/Accordion.css';
import manPlant from '../Images/Man_plant.webp';
import mexicanForest from '../Images/Mexican_Trees.webp'
import havingFun from '../Images/Having_fun.webp'
import campingFamily from '../Images/Camping_family.webp'
import plantingtrees from '../Images/Planting_trees.webp'
import dronePlant from '../Images/Drone_Plant.webp'
import irrigationTrees from '../Images/Irrigation_trees.webp'
import reforestTrees from '../Images/Reforest_trees.webp'
import plantationTrees from '../Images/Plantation_trees.webp'
import farTrees from '../Images/Far_trees.webp'

import React, { useState, useEffect } from 'react';

const Accordion = () => {
  // State to hold the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width to the state
      setWindowWidth(window.innerWidth);
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  // Determine the number of items to render based on window width
  const itemsToRender = windowWidth < 600 ? 2 : 10;

  // Images array to dynamically create list items
  const images = [

    { src: manPlant, alt: "Man planting a tree", content: "Help plant trees!" }, 
    { src: mexicanForest, alt: "A reforested mexican forest", content: "Be the future!" }, 
    { src: havingFun, alt: "People Having Fun", content: "Secure the future!" }, 
    { src: campingFamily, alt: "Preserve the Woods", content: "Enjoy Nature!" }, 
    { src: plantingtrees, alt: "People Planting Trees", content: "Support the cause!" }, 
    { src: dronePlant, alt: "Drone Tech", content: "Fund Innovation!" }, 
    { src: irrigationTrees, alt: "Irrigation Tech", content: "Help grow life!" },
    { src: reforestTrees, alt: "Reforest process", content: "Donate trees today!" }, 
    { src: plantationTrees, alt: "Plantation in process", content: "Help us plant!" }, 
    { src: farTrees, alt: "A reforest process drone shot", content: "Change the World!" } 
  
  ];

  return (
    <>
      <div className='Subtitle'>
        <h1>Your Action, Natures Reaction.</h1>
        <p>Unlock the power of change with every tree you plant. Witness the transformation</p>
      </div>

      <main>
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
      </main>
    </>
  );
};
export default Accordion;

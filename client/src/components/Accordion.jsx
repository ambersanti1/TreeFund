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


const Accordion = () => {
  return (
    <>
      <div className='Subtitle' >
        <h1>Your Action, Natures Reaction.</h1>
        <p> Unlock the power of change with every tree you plant. Witness the transformation</p>
      </div>

      <main>
        <ul className="accordion">
          <li>
            <img src={manPlant} alt="Man planting a tree" />
            <div className="content">
              <h2> Help plant trees! </h2>
            </div>
          </li>

          <li>
            <img src={mexicanForest} alt="A reforested mexican forest" />
            <div className="content">
              <h2> Be the future! </h2>
            </div>
          </li>

          <li>
            <img src={havingFun} alt="People Having fun" />
            <div className="content">
              <h2> Secure the future! </h2>
            </div>
          </li>

          <li>
            <img src={campingFamily} alt="Preserve the woods!" />
            <div className="content">
              <h2> Enjoy nature! </h2>
            </div>
          </li>

          <li>
            <img src={plantingtrees} alt="People Planting trees" />
            <div className="content">
              <h2> Support the cause! </h2>
            </div>
          </li>

          <li>
            <img src={dronePlant} alt="Drone planting technology" />
            <div className="content">
              <h2> Fund innovation! </h2>
            </div>
          </li>

          <li>
            <img src={irrigationTrees} alt="Irrigation technology" />
            <div className="content">
              <h2> Bring life back! </h2>
            </div>
          </li>

          <li>
            <img src={reforestTrees} alt="A reforest forest process" />
            <div className="content">
              <h2> Donate seeds today! </h2>
            </div>
          </li>

          <li>
            <img src={plantationTrees} alt="A reforest process" />
            <div className="content">
              <h2> Help us do this! </h2>
            </div>
          </li>

          <li>
            <img src={farTrees} alt="A reforest drone shot" />
            <div className="content">
              <h2> Change Mexico! </h2>
            </div>
          </li>

        </ul>
      </main>
    </>
  );
};

export default Accordion;

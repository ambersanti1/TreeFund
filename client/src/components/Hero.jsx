import heroImage from '../Images/Hero_img.webp';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div>
      <h1>
        Planting Today, for a Greener Tomorrow.
      </h1>
      <p> 
        With your donation today, we'll make sure biodiversity in Mexico keeps on thriving!
      </p>
      <div className="image-container" >
        <img src={heroImage} alt="People Planting Trees for a better future" />
      </div>
    </div>

  );
};

export default Hero;
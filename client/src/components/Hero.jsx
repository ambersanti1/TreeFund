import heroImage from '../Images/Hero_img.webp';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="image-container" >
        <img src={heroImage} alt="People Planting Trees for a better future" />
      </div>
    </div>

  );
};

export default Hero;
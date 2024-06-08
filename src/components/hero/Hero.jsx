import "./Hero.css";
import hero_image_desktop from "../../assets/image-hero-desktop.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-header">
          <h2>Maximize skill, <br></br>minimize budget</h2>
        </div>
        <div className="hero-para">
          <p>
            Our modern courses across a range of in-demand<br></br>skills will give you
            the knowledge you need to live<br></br>the life you want.
          </p>
        </div>
        <div className="hero-button">
            <button>Get Started</button>
        </div>
      </div>
      <div className="hero-container-right">
        <img src={hero_image_desktop} alt="" />
      </div>
    </div>
  );
};

export default Hero;
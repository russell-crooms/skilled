import "./Hero.css";
import hero_image_desktop from "../../assets/image-hero-desktop.png";
import hero_image_tablet from "../../assets/image-hero-tablet.webp";
import hero_image_mobile from "../../assets/image-hero-mobile.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-container-left">
        <div className="hero-header">
          <h2>
            Maximize skill, <br></br>minimize budget
          </h2>
        </div>
        <div className="hero-para">
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
        </div>
        <div className="hero-button">
          <button>Get Started</button>
        </div>
      </div>
      <div className="hero-container-right">
        <div className="hero-image-desktop">
          <img src={hero_image_desktop} alt="" />
        </div>
        <div className="hero-container-tablet">
          <img src={hero_image_tablet} alt="" />
        </div>
        <div className="hero-image-mobile">
          <img src={hero_image_mobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

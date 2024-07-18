import "./Hero.css";
import hero_image_desktop from "../../assets/image-hero-desktop.png";
import hero_image_tablet from "../../assets/image-hero-tablet.webp";
import hero_image_mobile from "../../assets/image-hero-mobile.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-left">
        <div className="hero-header-text">
          <h2>
            Maximize skill, <br></br>minimize budget
          </h2>
        </div>
        <div className="hero-paragraph">
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </p>
        </div>
        <div className="hero-button">
          <button>Get Started</button>
        </div>
      </div>
      <div className="hero-image-desktop">
        <img
          src={hero_image_desktop}
          alt="Image of a woman working at a desk while drinking from a mug. Text overlay on the image reads 'Members 29k' and 'Course hours 1,451'."
        />
      </div>
      <div className="hero-image-tablet">
        <img
          src={hero_image_tablet}
          alt="Image of a woman working at a desk while drinking from a mug. Text overlay on the image reads 'Members 29k' and 'Course hours 1,451'."
        />
      </div>
      <div className="hero-image-mobile">
        <img
          src={hero_image_mobile}
          alt="Image of a woman working at a desk while drinking from a mug. Text overlay on the image reads 'Members 29k' and 'Course hours 1,451'."
        />
      </div>
    </div>
  );
};

export default Hero;

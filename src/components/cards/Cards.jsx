import icon_animation from "../../assets/icon-animation.svg";
import icon_business from "../../assets/icon-business.svg";
import icon_crypto from "../../assets/icon-crypto.svg";
import icon_design from "../../assets/icon-design.svg";
import icon_photography from "../../assets/icon-photography.svg";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-section">
      <div className="cards" id="colorful-card">
        <h2 className="colorful-header">Check out our most popular courses!</h2>
      </div>
      {/*-- White Cards */}

      <div className="cards">
        <img src={icon_animation} className="icon-1" alt="" />
        <h2>Animation</h2>
        <p>
          Learn the latest animation techniques to create stunning motion design
          and captivate your audience.
        </p>
        <span>Get Started</span>
      </div>

      <div className="cards">
        <img src={icon_design} alt="" />
        <h2>Design</h2>
        <p>
          Create beautiful, usable interfaces to help shape the future of how
          the web looks.
        </p>
        <span>Get Started</span>
      </div>

      <div className="cards">
        <img src={icon_photography} alt="" />
        <h2>Photography</h2>
        <p>
          Explore critical fundamentals like lighting, composition, and focus
          <br></br>
          to capture exceptional photos.
        </p>
        <span>Get Started</span>
      </div>

      <div className="cards">
        <img src={icon_crypto} alt="" />
        <h2>Crypto</h2>
        <p>
          All you need to know to get started investing in crypto. Go from
          beginner to advanced with this 54 hour course.
        </p>
        <span>Get Started</span>
      </div>

      <div className="cards">
        <img src={icon_business} alt="" />
        <h2>Business</h2>
        <p>
          A step-by-step playbook to help you start, scale and sustain your
          business without outside investment.
        </p>
        <span>Get Started</span>
      </div>
    </div>
  );
};

export default Cards;

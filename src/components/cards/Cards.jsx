import icon_animation from "../../assets/icon-animation.svg";
import icon_business from "../../assets/icon-business.svg";
import icon_crypto from "../../assets/icon-crypto.svg";
import icon_design from "../../assets/icon-design.svg";
import icon_photography from "../../assets/icon-photography.svg";
import './Cards.css';

const Cards = () => {
  return (
    <div className="card-container">
      <div className="cards">
        <div className="colorful-card">
          <h2>Check out our <br></br> most popular courses!</h2>
        </div>
        <div className="white-card tablet-2">
          <img src={icon_animation} className="icon-1" alt="" />
          <h2>Animation</h2>
          <p>
            Learn the latest animation techniques to create stunning motion
            design and captivate your audience.
          </p>
          <p className="cards-get-started row-one">Get Started</p>
        </div>
        <div className="white-card design">
          <img src={icon_design} alt="" />
          <div className="design-container">
          <h2>Design</h2>
          <p>
            Create beautiful, usable interfaces to help shape the future of how
            the web looks.
          </p>
          <p className="cards-get-started design-get-started">Get Started</p>
          </div>
        </div>
        <div className="white-card photography">
          <img src={icon_photography} alt="" />
          <div className="photography-container">
          <h2>Photography</h2>
          <p>
            Explore critical fundamentals like lighting, composition, and focus<br></br>
            to capture exceptional photos.
          </p>
          <p className="cards-get-started photography-get-started">Get Started</p>
          </div>
        </div>
        <div className="white-card tablet-2">
          <img src={icon_crypto} alt="" />
          <h2>Crypto</h2>
          <p className="crypto-tablet">
            All you need to know to get<br></br> started investing in crypto. Go <br></br>from
            beginner to advanced with<br></br> this 54 hour course.
          </p>
          <p className="cards-get-started crypto-get-started">Get Started</p>
        </div>
        <div className="white-card tablet-2">
          <img src={icon_business} alt="" />
          <h2>Business</h2>
          <p>
            A step-by-step playbook to help you start, scale and sustain your
            business without outside investment.
          </p>
          <p className="cards-get-started">Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

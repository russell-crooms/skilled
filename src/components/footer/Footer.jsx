import "./Footer.css";
import logo_light from "../../assets/logo-light.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-items">
        <div className="footer-logo">
          <img className="logo" src={logo_light} alt="Skilled logo"/>
        </div>
        <div className="footer-button">
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

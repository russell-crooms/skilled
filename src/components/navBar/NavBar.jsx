import logo from '../../assets/logo-dark.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar-container">
        <img src={logo} alt="Skilled logo" className="logo"/>
        <div className="nav-button">Get Started</div>
    </div>
  )
}

export default NavBar
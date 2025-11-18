import logo from "@/assets/homelogo.png";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src='homelogo.png' alt="Axper Logo" className="logo" />
        </div>
        <nav className="navigation">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#about" className="nav-link">ABOUT US</a>
          <a href="#application" className="nav-link">APPLICATION</a>
          <a href="#contact" className="nav-link">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

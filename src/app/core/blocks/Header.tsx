'use client';

import logo from "@/assets/homelogo.png";
import { useState, useEffect } from 'react';
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="header"
      style={{
        animation: isScrolled ? 'none' : 'slideDown 0.6s ease-out',
        transition: 'all 0.3s ease-out',
      }}
    >
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
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

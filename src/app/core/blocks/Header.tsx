'use client';

import logo from "@/assets/homelogo.png";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        
        {/* Burger Menu Button */}
        <button 
          className={`burger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} color="#3D4B5E" strokeWidth={2.5} />
          ) : (
            <Menu size={28} color="#3D4B5E" strokeWidth={2.5} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
        )}

        {/* Desktop Navigation */}
        <nav className="navigation">
          <a href="/#home" className="nav-link">HOME</a>
          <a href="/#services" className="nav-link">SERVICES</a>
          <a href="/#fleet" className="nav-link">FLEET</a>
          <a href="/#about" className="nav-link">ABOUT US</a>
          <a href="/#contact" className="nav-link">CONTACT US</a>
          <div className="dropdown-container">
            <button className="nav-link dropdown-trigger">APPLICATION</button>
            <div className="dropdown-menu">
              <a href="/driver" className="dropdown-item">Driver For Us</a>
              <a href="/benefits" className="dropdown-item">Become an Owner-Operator</a>
              <a href="/contractor" className="dropdown-item">Become an Independent Contractor</a>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-navigation ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="/#home" className="mobile-nav-link" onClick={closeMobileMenu}>HOME</a>
          <a href="/#services" className="mobile-nav-link" onClick={closeMobileMenu}>SERVICES</a>
          <a href="/#fleet" className="mobile-nav-link" onClick={closeMobileMenu}>FLEET</a>
          <a href="/#about" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT US</a>
          <a href="/#contact" className="mobile-nav-link" onClick={closeMobileMenu}>CONTACT US</a>
          
          <div className="mobile-dropdown-container">
            <button 
              className="mobile-dropdown-trigger"
              onClick={(e) => {
                e.currentTarget.parentElement?.classList.toggle('active');
              }}
            >
              APPLICATION
            </button>
            <div className="mobile-dropdown-menu">
              <a href="/driver" className="mobile-dropdown-item" onClick={closeMobileMenu}>Driver For Us</a>
              <a href="/benefits" className="mobile-dropdown-item" onClick={closeMobileMenu}>Become an Owner-Operator</a>
              <a href="/contractor" className="mobile-dropdown-item" onClick={closeMobileMenu}>Become an Independent Contractor</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

'use client';

import usaMap from "@/assets/usamap.png";
import flags from "@/assets/usa_canada_flag.png";
import { useScrollAnimation } from "../animations/useScrollAnimation";
import "./Hero.css";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      className="hero" 
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0.8,
        transition: 'opacity 0.6s ease-out',
      }}
    >
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="hero-container">
        <div 
          className="hero-content"
          style={{
            animation: isVisible ? 'fadeInUp 0.8s ease-out' : 'none',
          }}
        >
          <div className="map-container">
            <img src='/usamap.png' alt="USA Map" className="usa-map" />
          </div>
          <div className="text-overlay">
            <h1 className="hero-title">
              YOUR FREIGHT,<br />
              OUR PRIORITY.
            </h1>
            <p className="hero-subtitle">
              We're ready for any honest partnership,<br />
              committed to reliability and trust.
            </p>
          </div>
          
          <div className="bottom-section">
           
            <div className="flags-container">
              <img src='/usacanada.png' alt="USA and Canada Flags" className="flags" />
            </div>
          </div>
          <div style={{zIndex:"1",marginTop:10,}} >
             <p className="bottom-text">
              Expedite, cross-border, and dedicated logistics across the U.S. and Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import usaMap from "@/assets/usamap.png";
import flags from "@/assets/usa_canada_flag.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
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
          <div >
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

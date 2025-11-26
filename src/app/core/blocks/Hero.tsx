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
            <img src='/usamap.png' alt="USA Map" className="usa-map"/>
          </div>
          <div className="text-overlay">
            <h1 className="hero-title">
              YOUR FREIGHT,<br/>
              OUR PRIORITY.
            </h1>
            <p className="hero-subtitle">
              We're ready for any honest partnership,<br/>
              committed to reliability and trust.
            </p>
          </div>

          <div className="w-full mt-auto pt-70 relative">
            <div className="flex flex-col md:flex-row items-center justify-center md:relative">

              {/* Centered Text */}
              <p className="text-[#3D4B5E] text-lg md:text-base text-center font-normal px-4 order-1 md:order-none">
                Expedite, cross-border, and dedicated logistics across the U.S. and Canada.
              </p>

              {/* Right Aligned Flags */}
              <div
                  className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-1/2 md:translate-y-1/2 order-2 md:order-none">
                <div className="flex items-center gap-2">
                  {/* Replaced generic placeholder with a constructed flag visualization for better aesthetics if image fails */}
                  <div className="h-8 md:h-10 w-auto flex shadow-sm">
                    {/* Visual representation of USA Flag */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2880px-Flag_of_the_United_States.svg.png"
                        alt="USA Flag"
                        className="h-full w-auto object-cover mr-2"
                    />
                    {/* Visual representation of Canada Flag */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/2560px-Flag_of_Canada_%28Pantone%29.svg.png"
                        alt="Canada Flag"
                        className="h-full w-auto object-cover"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

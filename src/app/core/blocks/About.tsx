'use client';

import Image from "next/image"
import { useScrollAnimation } from "../animations/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      className="about-section"
      ref={ref}
    >
      <div className="about-container">
        <h2 
          className="about-title"
          style={{
            animation: isVisible ? 'fadeInDown 0.6s ease-out' : 'none',
            opacity: isVisible ? 1 : 0,
          }}
        >
          About Axper
        </h2>
        
        <div 
          className="about-content"
          style={{
            animation: isVisible ? 'fadeInUp 0.8s ease-out 0.2s both' : 'none',
          }}
        >
          <div className="about-text">
            <p>At Axper, we specialize in dependable, efficient, and flexible logistics solutions across the U.S. and Canada</p>
            
            <p>Whether it's a single box or a full truckload, our experienced team ensures every shipment arrives safely and on time.</p>
            
            <p>With years of experience, a trusted carrier network, and dedicated dispatch professionals, we help businesses streamline their supply chains with reliability and transparency.</p>
            
            <p>Let us handle the logistics — so you can focus on growing your business.</p>
          </div>
          
          <div className="about-branding">
            <div className="axper-logo">
             <Image src='/mainlogo.png' width={500} height={500} alt='logo'/>
            </div>
           
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
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
        
        .about-section {
          background-color: #f5f5f5;
          padding: 80px 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .about-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }
        
        .about-title {
          text-align: center;
          font-size: 32px;
          font-weight: 600;
          color: #2d3e50;
          margin-bottom: 80px;
          letter-spacing: -0.5px;
        }
        
        .about-content {
          display: flex;
          gap: 100px;
          align-items: center;
        }
        
        .about-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        
        .about-text p {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin: 0;
          font-family: 'Geist', sans-serif;
        }
        
        .about-branding {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
        
        .axper-logo {
          width: 500px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .axper-logo svg {
          width: 100%;
          height: 100%;
        }
        
        .axper-name {
          font-size: 48px;
          font-weight: 700;
          color: #2d3e50;
          margin: 20px 0 0 0;
          letter-spacing: -1px;
        }
        
        .axper-tagline {
          font-size: 14px;
          color: #999;
          margin: 0;
          letter-spacing: 1px;
          text-transform: lowercase;
          font-family: 'Geist', sans-serif;
        }
        
        @media (max-width: 768px) {
          .about-section {
            padding: 60px 30px;
          }
          
          .about-content {
            flex-direction: column;
            gap: 60px;
          }
          
          .about-title {
            font-size: 28px;
            margin-bottom: 60px;
          }
          
          .about-text {
            gap: 20px;
          }
          
          .about-text p {
            font-size: 15px;
          }
          
          .axper-name {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  )
}

'use client';

import { useScrollAnimation } from "../animations/useScrollAnimation";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer 
      className="footer-container"
      ref={ref}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .footer-container {
          background-color: #3d4a5c;
          padding: 40px 20px;
          text-align: center;
          animation: ${isVisible ? 'fadeInUp 0.6s ease-out' : 'none'};
          opacity: ${isVisible ? 1 : 0};
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          box-sizing: border-box;
          width: 100%;
        }
        
        .social-icons {
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: center;
        }
        
        .social-icons a {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background-color: white;
          border-radius: 4px;
          transition: opacity 0.3s ease;
          color: #3d4a5c;
        }
        
        .social-icons a:hover {
          opacity: 0.85;
        }
        
        .footer-text {
          color: white;
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
        }
        
        .copyright {
          font-size: 14px;
          font-weight: 500;
          margin: 0;
        }
        
        .tagline {
          font-size: 14px;
          margin: 0;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            padding: 30px 16px;
          }
          
          .footer-content {
            flex-direction: column;
            gap: 16px;
            width: 100%;
            overflow-x: hidden;
          }
          
          .social-icons {
            gap: 12px;
          }

          .social-icons a {
            width: 40px;
            height: 40px;
          }

          .copyright {
            font-size: 12px;
          }

          .tagline {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 20px 12px;
          }

          .footer-content {
            gap: 12px;
          }

          .social-icons {
            gap: 8px;
          }

          .social-icons a {
            width: 36px;
            height: 36px;
          }

          .social-icons svg {
            width: 18px;
            height: 18px;
          }

          .copyright {
            font-size: 11px;
          }

          .tagline {
            font-size: 11px;
          }
        }
      `}</style>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://www.facebook.com/axpergroup/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/axpergroup/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="17" cy="7" r="0.8" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://t.me/axpergroup" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.5-1.359 8.627-.168.9-.499 1.201-.82 1.23-.697.064-1.228-.46-1.9-.902-1.056-.692-1.653-1.123-2.678-1.799-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.305-3.23.007-.032.015-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.329-.913.489-1.302.48-.429-.008-1.252-.242-1.865-.44-.752-.24-1.349-.366-1.297-.775.027-.2.325-.404.893-.612 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.099.152.232.164.366-.002.11.003.212 0 .329z"/>
            </svg>
          </a>
        </div>
        <div className="footer-text">
          <p className="copyright">© 2025 Axper LLC. All rights reserved.</p>
          <p className="tagline">Reliable logistics. Trusted results.</p>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed mt-2">
            I acknowledge that I have read and understand the{" "}
            <a 
              href="/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-300"
            >
              Privacy Policy & SMS Terms
            </a>{" "}
            of Axper, LLC, and I consent to receive SMS messages regarding my application. Reply STOP to opt out at any time.
          </p>
        </div>
      </div>
    </footer>
  )
}

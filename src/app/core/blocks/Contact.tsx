"use client";

import { useState } from "react";
import { useScrollAnimation } from "../animations/useScrollAnimation";
import styles from "../styles/contact.module.css";

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://axpergroup.com/api/v1/contact-form/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            form_type: "feedback",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSuccessMessage("Message sent successfully! We will contact you soon.");
      setFormData({ name: "", phone: "", email: "", message: "" });

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.contactSection} ref={ref}>
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
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
      <div className={styles.container}>
        <h2
          className={styles.heading}
          style={{
            animation: isVisible ? "fadeInDown 0.6s ease-out" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          Contact Us
        </h2>

        <div className={styles.content}>
          <div
            className={styles.leftColumn}
            style={{
              animation: isVisible
                ? "fadeInLeft 0.6s ease-out 0.1s both"
                : "none",
            }}
          >
            <h3 className={styles.tagline}>Let's Move Freight Together</h3>
            <p className={styles.description}>
              Have a question or need a quote? We're always ready to help
              <br />
              Call, email, or fill out the form — our team responds within 15
              minutes during business hours.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <p>
                  <span className={styles.label}>Company Phone</span>:
                  <a href="tel:(940) 398-0770" className={styles.link}>
                    (940) 398-0770
                  </a>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  <span className={styles.label}>24/7 Operations Phone</span>:
                  <a href="tel:(940) 398-0110" className={styles.link}>
                    (940) 398-0110
                  </a>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  <span className={styles.label}>24/7 Email</span>:
                  <a href="mailto:ops@axpergroup.com" className={styles.link}>
                    ops@axpergroup.com
                  </a>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  <span className={styles.label}>Address</span>
                  <span className={styles.text}>
                    1673 Reed Dr, Krum, TX, 76249, US
                  </span>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  {" "}
                  <span className={styles.label}>MC</span>:
                  <span className={styles.text}>1603523</span>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  <span className={styles.label}>USDOT</span>:
                  <span className={styles.text}>4169562</span>
                </p>
              </div>
            </div>
          </div>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
            style={{
              animation: isVisible
                ? "fadeInRight 0.6s ease-out 0.1s both"
                : "none",
            }}
          >
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                required
              />
            </div>

            {successMessage && (
              <div className={styles.successMessage}>✓ {successMessage}</div>
            )}

            {errorMessage && (
              <div className={styles.errorMessage}>✗ {errorMessage}</div>
            )}

            <div className="flex items-start gap-2 mb-4">
              <input
                type="checkbox"
                id="privacy-consent"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 text-[#2c3e50] border-gray-300 rounded focus:ring-[#2c3e50]"
                required
              />
              <label htmlFor="privacy-consent" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                I acknowledge that I have read and understand the{" "}
                <a 
                  href="/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#2c3e50] underline hover:text-[#1e2b3a]"
                >
                  Privacy Policy & SMS Terms
                </a>{" "}
                of Axper, LLC, and I consent to receive SMS messages regarding my application. Reply STOP to opt out at any time.
              </label>
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading || !agreedToTerms}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

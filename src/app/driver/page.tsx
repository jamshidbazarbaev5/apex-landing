"use client"

import { useState } from "react"
import { Kanit } from "next/font/google"
import Header from "../core/blocks/Header"
import Footer from "../core/blocks/Footer"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export default function DriveForUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

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
            form_type: "driver",
          }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSuccessMessage("Message sent successfully! We will contact you soon.")
      setFormData({ name: "", phone: "", email: "", message: "" })

      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccessMessage(""), 5000)
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={kanit.className}>
      <Header />
      <main className="main-container">
        <h1 className="main-title">Drive For Us</h1>

        <div className="content-wrapper">
          {/* Left side - Requirements and What We Provide */}
          <div className="left-section">
            <p className="intro-text">
              Join our team of professional company drivers.
              <br />
              We operate well-maintained trucks and provide stable miles,
              <br />
              clear communication, and full support on every load.
            </p>

            <div className="requirements-section">
              <h2 className="section-title">Driver Requirements</h2>
              <ul className="requirements-list">
                <li>Valid EAD (Employment Authorization Document)</li>
                <li className="indent-1">At least 2+ years of driving experience</li>
                <li className="indent-2">Valid U.S. Driver's License</li>
                <li className="indent-1">Clean driving record (no major violations)</li>
                <li className="indent-2">Ability to drive OTR / Regional</li>
                <li>Basic English for communication with dispatch</li>
                <li className="indent-1">Responsible, punctual, professional attitude</li>
                <li className="indent-2">Ability to provide updates on time</li>
                <li>Must follow all safety procedures and company policies</li>
              </ul>
            </div>

            <div className="provide-section">
              <h2 className="section-title">What We Provide</h2>
              <ul className="provide-list">
                <li>Well-maintained trucks (fuel, maintenance, insurance covered)</li>
                <li className="indent-1">24/7 dispatch & tracking support</li>
                <li className="indent-2">Consistent weekly miles</li>
                <li className="indent-1">Quick problem-solving & full back-office support</li>
                <li className="indent-2">Transparent pay and on-time payments</li>
              </ul>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="right-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="form-input"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="form-textarea"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
              {successMessage && (
                <div className="success-message">✓ {successMessage}</div>
              )}
              {errorMessage && (
                <div className="error-message">✗ {errorMessage}</div>
              )}
              <button type="submit" className="submit-button" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <style jsx>{`
        .main-container {
          background-color: #e8e8e8;
          min-height: 100vh;
          padding: 40px 60px 60px;
        }
        
        .main-title {
          text-align: center;
          color: #2c3e50;
          font-size: 32px;
          font-weight: 600;
          font-style: italic;
          margin-top: 80px;
        }
        
        .content-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .left-section {
          flex: 1;
          max-width: 680px;
        }
        
        .intro-text {
          text-align: center;
          color: #5a6a7a;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
          font-style: italic;
        }
        
        .section-title {
          text-align: center;
          color: #2c3e50;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          margin-top: 25px;
        }
        
        .requirements-list,
        .provide-list {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: center;
        }
        
        .requirements-list li,
        .provide-list li {
          color: #5a6a7a;
          font-size: 15px;
          margin-bottom: 4px;
          position: relative;
        }
        
        .requirements-list li::before,
        .provide-list li::before {
          content: "●";
          color: #2c3e50;
          margin-right: 8px;
          font-size: 16px;
          vertical-align: middle;
        }
        
        .indent-1 {
          padding-left: 40px;
        }
        
        .indent-2 {
          padding-left: 80px;
        }
        
        .right-section {
          width: 420px;
          padding-top: 80px;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .form-input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          background-color: white;
          color: #333;
        }
        
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #999;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #2c3e50;
        }
        
        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
          background-color: white;
          color: #333;
          resize: vertical;
          min-height: 100px;
        }
        
        .submit-button {
          align-self: flex-start;
          background-color: #2c3e50;
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 25px;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .submit-button:hover:not(:disabled) {
          background-color: #1a252f;
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .success-message {
          color: #28a745;
          font-size: 14px;
          padding: 10px 12px;
          background-color: #f0f8f4;
          border-radius: 4px;
          border-left: 3px solid #28a745;
        }

        .error-message {
          color: #dc3545;
          font-size: 14px;
          padding: 10px 12px;
          background-color: #f8f0f0;
          border-radius: 4px;
          border-left: 3px solid #dc3545;
        }
        
        @media (max-width: 1024px) {
          .content-wrapper {
            flex-direction: column;
            align-items: center;
          }
          
          .right-section {
            width: 100%;
            max-width: 420px;
            padding-top: 40px;
          }
        }
      `}</style>
      <Footer />
    </div>
  )
}

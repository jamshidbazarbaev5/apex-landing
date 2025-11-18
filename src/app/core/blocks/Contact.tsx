'use client';

import { useState } from 'react';
import styles from '../styles/contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <h3 className={styles.tagline}>Let's Move Freight Together</h3>
            <p className={styles.description}>
              Have a question or need a quote? We're always ready to help<br />
              Call, email, or fill out the form — our team responds within 15 minutes during business hours.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Company Phone</span>
                <a href="tel:(940) 398-0770" className={styles.link}>(940) 398-0770</a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>24/7 Operations Phone</span>
                <a href="tel:(940) 398-0110" className={styles.link}>(940) 398-0110</a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>24/7 Email</span>
                <a href="mailto:ops@axpergroup.com" className={styles.link}>ops@axpergroup.com</a>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>Address</span>
                <span className={styles.text}>1673 Reed Dr, Krum, TX, 76249, US</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>MC</span>
                <span className={styles.text}>1603523</span>
              </div>

              <div className={styles.infoItem}>
                <span className={styles.label}>USDOT</span>
                <span className={styles.text}>4169562</span>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
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

            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

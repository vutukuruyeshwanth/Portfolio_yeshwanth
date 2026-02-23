import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      {/* Background Grid for consistency */}
      <div className="bg-grid-layer"></div>

      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-tag">GET IN TOUCH</p>
          <h1 className="contact-title">Let's <span>Connect</span></h1>
          <p className="contact-desc">
            Whether you have a question, a project idea, or just want to say hi, 
            my inbox is always open. I'll do my best to get back to you!
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Card */}
          <div className="contact-card wide">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <h3>Email</h3>
              <p>yeshwanthvutukuru31@gmail.com</p>
            </div>
            <a href="mailto:yeshwanthvutukuru31@gmail.com" className="contact-link-btn">
              Send Message
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="contact-card">
            <div className="contact-icon">🔗</div>
            <div className="contact-info">
              <h3>LinkedIn</h3>
              <p>Professional Network</p>
            </div>
            <a href="https://www.linkedin.com/in/yeshwanth" target="_blank" rel="noreferrer" className="contact-link-btn">
              Connect ↗
            </a>
          </div>

          {/* GitHub Card */}
          <div className="contact-card">
            <div className="contact-icon">💻</div>
            <div className="contact-info">
              <h3>GitHub</h3>
              <p>Source Code & Projects</p>
            </div>
            <a href="https://github.com/yeshwanth" target="_blank" rel="noreferrer" className="contact-link-btn">
              Follow ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
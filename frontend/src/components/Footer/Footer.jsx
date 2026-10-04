import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <div className="footer-logo-icon">B</div>

            <span>Builder360</span>
          </a>

          <p>
            Building reliable infrastructure and construction solutions for a
            better tomorrow.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Services</h3>

          <a href="/services">Construction</a>
          <a href="/services">Infrastructure</a>
          <a href="/services">Project Management</a>
          <a href="/services">Consulting</a>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <a href="mailto:info@builder360.com">info@builder360.com</a>

          <a href="tel:+919999999999">+91 99999 99999</a>

          <p>Kolkata, West Bengal</p>
        </div>
      </div>

      {/* Bottom */}

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2026 Builder360. All rights reserved.</p>

          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>

            <a href="/terms">Terms of Service</a>

            <a href="/login" className="admin-login">
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

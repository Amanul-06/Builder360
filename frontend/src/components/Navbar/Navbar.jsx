import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <div className="logo-icon">B</div>

          <span className="logo-text">Builder360</span>
        </a>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="navbar-actions">
          <a href="/login" className="login-link">
            Login
          </a>

          <a href="/get-started" className="get-started-btn">
            Get Started
            <span>→</span>
          </a>
        </div>

        <button className="mobile-menu-btn" aria-label="Open menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

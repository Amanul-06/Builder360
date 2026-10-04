import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-tag">BUILDING THE FUTURE</p>

          <h1>
            We Build.
            <span> You Grow.</span>
          </h1>

          <p className="hero-description">
            Reliable construction and infrastructure solutions designed to bring
            your vision to life.
          </p>

          <div className="hero-actions">
            <a href="/projects" className="hero-primary-btn">
              Explore Our Projects
              <span>→</span>
            </a>

            <a href="/contact" className="hero-secondary-btn">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="hero-visual">
          <div className="hero-placeholder">
            <span>Builder360</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from "react";
import Starsvg from "../assets/svgs/Starsvg"; // Import the Starsvg component
import { FiArrowDown } from "react-icons/fi";
import resume from "../assets/resume.pdf";

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const openResume = (e) => {
    e.preventDefault();
    setShowResume(true);
  };

  const closeResume = () => {
    setShowResume(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="svg-box-left">
          <Starsvg />
        </div>
        <div className="svg-box-right">
          <Starsvg />
        </div>
        <h1 className="hero-heading">
          Heya! It's Krish<span className="span-accent">.</span> <br />a web
          designer and developer<span className="span-accent">.</span>
        </h1>
        <p className="hero-description">
          I create beautiful and functional websites that provide an exceptional
          user experience. From concept to code — built manually, no web
          builders involved. Let's work together to bring your ideas to life!
        </p>
        <div className="hero-cta-container">
          <a href="#projects">
            <button className="cta-button">View my work</button>
          </a>
          <button className="cta-button" onClick={openResume}>
            View my Resume
          </button>
        </div>
        <div className="arrowdown">
          <FiArrowDown />
        </div>
      </div>
      {showResume && (
        <div className="resume-modal">
          <div className="resume-modal-backdrop" onClick={closeResume}></div>
          <div className="resume-modal-content">
            <button className="resume-modal-close" onClick={closeResume}>
              &times;
            </button>
            <iframe
              src={resume}
              title="Resume"
              width="100%"
              height="100%"
              style={{ border: "none"}}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;

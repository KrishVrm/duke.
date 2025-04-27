import React from "react";
import Starsvg from "../assets/svgs/Starsvg"; // Import the Starsvg component
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
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
        <a href="#projects">
          <button className="cta-button">View my work</button>
        </a>
        <div className="arrowdown">
          <FiArrowDown />
        </div>
      </div>
    </section>
  );
};

export default Hero;

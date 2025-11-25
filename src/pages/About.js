import React from "react";
import "./About.css";
import profile from "./eduard.jpg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hexagon Image */}
        <div className="image-box">
          <img src={profile} alt="Raj Jeremiah Ocampo" />
        </div>

        {/* Text */}
        <div className="about-text">
          <h2>
            About <span className="highlight">Me</span>
          </h2>

          <p>
           I’m Eduard john Mirandilla, a frontend enthusiast dedicated to crafting web applications that are as functionally robust as they are visually engaging. My goal is always to deliver modern, efficient, and user-focused digital experiences.
          </p>

          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
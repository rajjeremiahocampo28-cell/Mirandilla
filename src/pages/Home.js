import React from "react";
import myPic from "../pages/eduard.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-left">
        <h3>Hello, I'm </h3>
        <h1>Eduard John Mirandilla</h1>
        <h2>
          And I'm a <span className="highlight">Frontend Developer</span>
        </h2>

        <p>
          I create responsive, modern, and user-friendly web applications using
          React and JavaScript.
        </p>

        <div className="socials">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className="buttons">
          <button className="btn-primary">Download CV</button>

          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="home-right">
        <div className="circle">
          <img src={myPic} alt="profile" />
        </div>
      </div>
    </section>
  );
}
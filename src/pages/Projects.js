import React from "react";
import "./Projects.css";

import project from "../pages/project.jpg";

const PROJECTS = [
  {
    title: "SHOPPER",
    desc: "aesthetic clothes for Men,Women, and Kids",
    tech: "React & JavaScript",
    img: project,
    link: "https://github.com/Quincy-byte/E-commerce",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className="project-card">
              <div
                className="project-img"
                style={{ backgroundImage: `url(${p.img})` }}
              ></div>

              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <p className="project-tech">{p.tech}</p>

              <a
                href={p.link}
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./Skills.css";


const SKILLS = [
  { name: "React", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 78 },
  { name: "Java", level: 88 },
  { name: "Node.js", level: 75 }
];

export default function Skills() {
  return (
    <section className="page page-skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div key={s.name} className="skill-card">
              <div className="skill-head">
                <div className="skill-name">{s.name}</div>
                <div className="skill-level">{s.level}%</div>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
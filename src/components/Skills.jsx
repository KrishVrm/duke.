import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaSass,
} from "react-icons/fa"; // Example icons

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML5", icon: <FaHtml5 /> },
    { id: 2, name: "CSS3", icon: <FaCss3Alt /> },
    { id: 3, name: "JavaScript", icon: <FaJsSquare /> },
    { id: 4, name: "React", icon: <FaReact /> },
    { id: 5, name: "Figma", icon: <FaFigma /> },
    { id: 6, name: "Sass", icon: <FaSass /> },
  ];

  return (
    <section className="skills">
      <h2 className="skills-heading">My Skills</h2>
      <p className="skills-description">
        Here are some of the technologies I use to build amazing projects.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import fylolandingThumbnail from "../assets/previews/fylolanding.webp";
import restapiThumbnail from "../assets/previews/restapi.webp";
import authThumbnail from "../assets/previews/auth.webp";
import spaceThumbnail from "../assets/previews/space.webp";
import sneakersThumbnail from "../assets/previews/sneakers.webp";
import mealmapsThumbnail from "../assets/previews/mealmaps.webp";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Fylo Landing Page",
      description: "Description of project one.",
      image: fylolandingThumbnail, // Replace with actual image path
    },
    {
      id: 2,
      title: "Rest API Project",
      description: "Description of project two.",
      image: restapiThumbnail, // Replace with actual image path
    },
    {
      id: 3,
      title: "Multi-Step Form",
      description: "Description of project three.",
      image: authThumbnail, // Replace with actual image path
    },
    {
      id: 4,
      title: "Space Tourism Multiple-Page",
      description: "Description of project four.",
      image: spaceThumbnail, // Replace with actual image path
    },
    {
      id: 5,
      title: "E-commerce Product Page",
      description: "Description of project four.",
      image: sneakersThumbnail, // Replace with actual image path
    },
    {
      id: 6,
      title: "MealMaps",
      description: "Description of project four.",
      image: mealmapsThumbnail, // Replace with actual image path
    },
  ];

  return (
    <section className="work" id="projects">
      <h2 className="work-heading">My Projects</h2>
      <div className="work-grid">
        {projects.map((project) => (
          <div key={project.id} className="work-item">
            <img
              src={project.image}
              alt={project.title}
              className="work-image"
            />
            <h3 className="work-title">{project.title}</h3>
            {/* <p className="work-description">{project.description}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

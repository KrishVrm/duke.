import React, { useState } from "react";
import fylolandingThumbnail from "../assets/previews/fylolanding.webp";
import restapiThumbnail from "../assets/previews/restapi.webp";
import authThumbnail from "../assets/previews/auth.webp";
import spaceThumbnail from "../assets/previews/space.webp";
import sneakersThumbnail from "../assets/previews/sneakers.webp";
import mealmapsThumbnail from "../assets/previews/mealmaps.webp";
import maternalhealthThumbnail from "../assets/previews/maternalhealth.webp";

const Work = () => {
  const [activeTab, setActiveTab] = useState("completed");
  const [loading, setLoading] = useState(false);

  const completedProjects = [
    {
      id: 1,
      title: "MealMaps",
      image: mealmapsThumbnail,
    },
    {
      id: 2,
      title: "Rest API Project",
      image: restapiThumbnail,
    },
    {
      id: 3,
      title: "Multi-Step Form",
      image: authThumbnail,
    },
    {
      id: 4,
      title: "Space Tourism Multiple-Page",
      image: spaceThumbnail,
    },
    {
      id: 5,
      title: "E-commerce Product Page",
      image: sneakersThumbnail,
    },
    {
      id: 6,
      title: "Fylo Landing Page",
      image: fylolandingThumbnail,
    },
  ];

  const underWorkProjects = [
    {
      id: 1,
      title: "Maternal Health Screening",
      image: maternalhealthThumbnail,
    },
  ];

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setLoading(true);
      setTimeout(() => {
        setActiveTab(tab);
        setLoading(false);
      }, 400); // Adjust delay as needed
    }
  };

  const renderProjects = (projects) => {
    return projects.map((project) => (
      <div key={project.id} className="work-item">
        <img src={project.image} alt={project.title} className="work-image" />
        <h3 className="work-title">{project.title}</h3>
      </div>
    ));
  };

  // Skeleton loader component
  const renderSkeletons = (count) => {
    return Array.from({ length: count }).map((_, idx) => (
      <div key={idx} className="work-item skeleton">
        <div className="work-image skeleton-box" />
        <div className="work-title skeleton-box" style={{ height: 24, width: "60%", margin: "12px auto" }} />
      </div>
    ));
  };

  return (
    <section className="work" id="projects">
      <h2 className="work-heading">My Projects</h2>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "completed" ? "active" : ""}`}
          onClick={() => handleTabChange("completed")}
        >
          Completed Projects
        </button>
        <button
          className={`tab-button ${activeTab === "underwork" ? "active" : ""}`}
          onClick={() => handleTabChange("underwork")}
        >
          Future Projects
        </button>
      </div>
      <div className="work-grid">
        {loading
          ? renderSkeletons(activeTab === "completed" ? completedProjects.length : underWorkProjects.length)
          : activeTab === "completed"
            ? renderProjects(completedProjects)
            : renderProjects(underWorkProjects)}
      </div>
    </section>
  );
};

export default Work;

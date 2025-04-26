import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa"; // Import icons

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: "Email",
      value: "krishvrm2005@gmail.com",
      link: "mailto:krishvrm2005@gmail.com",
    },
    {
      id: 2,
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/KrishVrm",
      link: "https://github.com/krishvrm",
    },
    {
      id: 3,
      icon: <FaInstagram />,
      label: "Instagram",
      value: "instagram.com/potatodukee",
      link: "https://instagram.com/potatodukee",
    },
    // {
    //   id: 4,
    //   icon: <FaPhone />,
    //   label: "Phone",
    //   value: "+91 75719 68080",
    //   link: "tel:+1234567890",
    // },
    // {
    //   id: 5,
    //   icon: <FaTwitter />,
    //   label: "X (Twitter)",
    //   value: "twitter.com/yourusername",
    //   link: "https://twitter.com/krishvrm",
    // },
    {
      id: 6,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/krishvrm",
      link: "https://linkedin.com/in/krishvrm",
    },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-description">
        Feel free to reach out to me through any of the platforms below.
      </p>
      <div className="contact-list">
        {contactInfo.map((info) => (
          <a
            key={info.id}
            href={info.link}
            className="contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="contact-icon">{info.icon}</div>
            <div className="contact-details">
              <h3 className="contact-label">{info.label}</h3>
              <p className="contact-value">{info.value}</p>
            </div>
          </a>
        ))}
      </div>
      <hr style={{ marginTop: "3rem" }} />
    </section>
  );
};

export default Contact;

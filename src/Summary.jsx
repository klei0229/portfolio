import React from "react";
import { summary,links } from "./data";
import "./App.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Summary = () => {
  return (
    <div className="summary">
      <img src="https://media.licdn.com/dms/image/D4E03AQFxksiXEgTt2A/profile-displayphoto-shrink_400_400/0/1680534639146?e=1686182400&v=beta&t=YGg7u-5K7Wx7pf-Lj4rp_gVfU9K_s9y590qF6ySICPY"></img>
      <h1>{summary.name}</h1>
      <h3>{summary.subheading}</h3>
      <button className="download-button"><a href="#">Download Resume</a></button>

      <div className="summary-btn-container">
        <button className="summary-btn">
          <a href={links.linkedin} className="summary-a">
            <BsLinkedin className="summary-icon"></BsLinkedin>
          </a>
        </button>
        <button className="summary-btn">
          <a href={links.github} className="summary-a">
            <BsGithub className="summary-icon"></BsGithub>
          </a>
        </button>
      </div>
      <p>{summary.description}</p>
    </div>
  );
};

export default Summary;

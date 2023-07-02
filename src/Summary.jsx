import React from "react";
import { summary,links } from "./data";
import "./App.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import profile from "./images/profile.jpg"

const Summary = () => {
  return (
    <div className="summary">
      <img className="profile" src={profile}></img>
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

import React from "react";
import { projects } from "./data";
const Projects = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <div>
            <h1>{project.name}</h1>
            <h3>{project.subheading}</h3>
            <p>{project.description}</p>
            <h4>Technologies Used</h4>
            <ul>
              {project.technologies.map((technology) => {
                return <li>{technology}</li>;
              })}
            </ul>
            <h4>My Role</h4>
            <p>{project.role}</p>
            <h4>Project Difficulties</h4>
            <p>{project.difficulties}</p>
            <button>
              <a href>Github</a>
            </button>
            <button>
              <a href>Source</a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

import React from "react";
import ImageCarousel from "./ImageCarousel";
import { projects } from "./data";
import "./App.css";
import { MdFolderCopy } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { BsGithub, BsGlobe2 } from "react-icons/bs";

const Projects = () => {
  return (
    <div>
      {projects.map((project) => {
        return (
          <section className="project">
            <div className="icon-container">
              <MdFolderCopy className="folder-icon" />
            </div>
            <div className="project-flex-container">
              <div className="left-col">
                <h2>{project.name}</h2>
                <h3>{project.subheading}</h3>
                {/* <img className="image" src={project.image}></img> */}
                <ImageCarousel imageGallery={project.images}></ImageCarousel>
                <p>{project.description}</p>
                <div className="social-buttons-container">
                  <button className="icon-button">
                    <a href={project.githubLink} className="projects-a">
                      <BsGithub className="icon"></BsGithub>
                    </a>
                  </button>
                  <button className="icon-button">
                    <a href={project.demoLink} className="projects-a">
                      <BsGlobe2 className="icon"></BsGlobe2>
                    </a>
                  </button>
                </div>
              </div>
              <div className="right-col">
                <h4>My Role</h4>
                <p>{project.role}</p>
                <h4>Project Difficulties</h4>
                <p>{project.difficulties}</p>
                <h4>Technologies Used</h4>
                <ul>
                  {project.technologies.map((technology) => {
                    return (
                      <li>
                        <IoIosArrowDroprightCircle className="bullet" />
                        {technology}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Projects;

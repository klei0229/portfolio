import React from "react";
import { about, skills, about2 } from "./data";
import "./App.css";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import parse from "html-react-parser";

const About = () => {
  return (
    <section className="about">
      {/* <p>{about.text}</p> */}
      <div className="icon-container">
        <CgProfile className="folder-icon" />
      </div>
      {/* {about.text.split("\n").map((block)=>{return <p>{block}</p>})} */}

      {parse(about.text)}

      <ul>
        {skills.map((skill) => {
          return (
            <li>
              <IoIosArrowDroprightCircle className="bullet" />
              {skill.name}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;

import React from "react";
import { about, skills } from "./data";
const About = () => {
  return (
    <div>
      About
      <p>{about.text}</p>
      <ul>
        {skills.map((skill) => {
          return <li>{skill.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;

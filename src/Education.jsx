import React from "react";
import { education } from "./data";
const Education = () => {
  return (
    <div>
      Education
      {education.map((school, idx) => {
        return (
          <div>
            <h1>{school.title}</h1>
            <h3>{school.subheading}</h3>
            <p>{school.description}</p>
            {/* {console.log(school.courses)} */}
            {school.courses !== undefined ? <ul>{school.courses.map((course)=>{return <li>{course}</li>})}</ul> : "" }
          </div>
        );
      })}
    </div>
  );
};

export default Education;

import React from "react";
import { education } from "./data";
import "./App.css";
import { HiCommandLine } from "react-icons/hi2";
import { IoLogoJavascript } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Education = () => {
  return (
    <div>
      {education.map((school, idx) => {
        return (
          <section className="education">
            <div className="icon-container">
              <HiCommandLine className="folder-icon"></HiCommandLine>
            </div>
            <br></br>
            <h2>
              {idx + 1}.{school.title}
            </h2>
            <h3>{school.subheading}</h3>
            {/* <p>{school.description}</p> */}

            {school.description.split("\n").map((sentence) => {
              return <p>{sentence}</p>;
            })}
            {/* {console.log(school.courses)} */}
            {school.courses !== undefined ? (
              <ul>
                {school.courses.map((course) => {
                  return (
                    <li>
                      <IoIosArrowDroprightCircle className="bullet" />
                      {course}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </section>
        );
      })}
    </div>
  );
};

export default Education;

import React from "react";
import { summary } from "./data";

const Summary = () => {
  return (
    <div>
      Summary
      <h1>{summary.name}</h1>
      <h3>{summary.subheading}</h3>
      <button>Download Resume</button>
      <button>Github</button>
      <button>LinkedIn</button>
      <p>{summary.description}</p>
    </div>
  );
};

export default Summary;

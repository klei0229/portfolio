import "./App.css";
import Summary from "./Summary";
import Nav from "./Nav";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";
import Header from "./Header";
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const loc = useLocation().pathname;
  console.log(loc)
  return (
    <div className="App">
      <Header></Header>

      <div className="flex-container">
        <Summary></Summary>
        <div className="right-column">
          <Nav loc={loc}></Nav>
          <Routes>
            <Route path="/" element={<About/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/education" element={<Education />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
      {/* <Education></Education> */}
      {/* <Projects></Projects> */}
    </div>
  );
}

export default App;

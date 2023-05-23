import React, { useState } from "react";
import { nav } from "./data";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = ({loc}) => {
  return (
    <div className="nav">
      <ul>
        {nav.map((nav_element) => {
          return (
            <li>
              <Link to={nav_element.link}>
                <button className="nav-button" style={loc !== nav_element.link ? {color:'white'} : {color:'#489294'}}> {nav_element.name}</button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;

import React from "react";
import { nav } from "./data";

const Nav = () => {
  return (
    <div>
      <ul>
        {nav.map((nav_element) => {
          return (
            <li>
              <a href={nav_element.link}>{nav_element.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;

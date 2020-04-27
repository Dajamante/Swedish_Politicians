import React from "react";
import NavButton from "./NavButton";
import NavSubMenu from "./NavSubMenu";
import "./NavBar.scss";

/**
 * Menu component for the navigation bar with functionality for mouse-over extending menu options.
 */

const NavBar = () => {
  const aboutMenu = [
    { title: "Team", path: "/aboutTeam" },
    { title: "FindWise", path: "/aboutFindwise" },
  ];

  return (
    <nav className="nav">
      <ul className="nav__menu">
        <NavButton path="/" value="Home" />
        <NavButton path="/toplists" value="Toplists" />
        <NavButton path="/sample" value="Sample" />
        <NavButton path="/aboutProject" value="About">
          <NavSubMenu values={aboutMenu} />
        </NavButton>
      </ul>
    </nav>
  );
};

export default NavBar;

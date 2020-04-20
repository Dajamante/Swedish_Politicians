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
        <NavButton path="/" value="Home">
          Home
        </NavButton>
        <NavButton path="/toplists">Toplists</NavButton>
        <NavButton path="/sample">Sample</NavButton>
        <NavButton path="/aboutProject" value="About">
          About
          <NavSubMenu values={aboutMenu} />
        </NavButton>

        {/*<li className="nav__menu-item">
          <span role="button">About</span>
          {/*this.state.showAboutMenu && <Submenu />}
        </li>*/}
      </ul>
    </nav>
  );
};

export default NavBar;

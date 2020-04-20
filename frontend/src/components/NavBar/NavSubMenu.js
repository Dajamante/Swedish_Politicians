import React from "react";
import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

/**
 * Submenu component specific for the "About" option in the navigation bar.
 */
const NavSubMenu = ({ values }) => {
  return (
    <ul className="nav__submenu">
      {values.map((el) => (
        <NavButton path={el.path} className="nav__submenu-item">
          {el.title}
        </NavButton>
      ))}
    </ul>
  );
};

export default NavSubMenu;

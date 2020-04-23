import React from "react";
import { NavLink } from "react-router-dom";

const NavButton = ({ path, children, className }) => {
  return (
    <li className={className ? className : "nav__menu-item"}>
      <NavLink
        to={path}
        isActive={(match, location) => {
          if (!match) {
            return false;
          }
        }}
      >
        {children ? children : ""}
      </NavLink>
    </li>
  );
};

export default NavButton;

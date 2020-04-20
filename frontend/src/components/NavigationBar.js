import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/menu.scss";

/**
 * Submenu component specific for the "About" option in the navigation bar.
 */
class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <NavLink to="/aboutTeam"   isActive={(match, location) => {
    if (!match) {
      return false;
    }}}>Team</NavLink>
        </li>
        <li className="nav__submenu-item ">
          <NavLink to="/aboutFindwise"   isActive={(match, location) => {
    if (!match) {
      return false;
    }}}>Findwise</NavLink>
        </li>
        <li className="nav__submenu-item ">
          <NavLink to="/aboutProject"   isActive={(match, location) => {
    if (!match) {
      return false;
    }}}>Project</NavLink>
        </li>
      </ul>
    );
  }
}

/**
 * Menu component for the navigation bar with functionality for mouse-over extending menu options.
 */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAboutMenu: false,
    };
  }

  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };

  handleLeave = () => {
    this.setState({ showAboutMenu: false });
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <NavLink to="/home"   isActive={(match, location) => {
              if (!match) {
                return false;
              }}}>Hem</NavLink>
          </li>

          <li className="nav__menu-item">
            <NavLink to="/toplists"   isActive={(match, location) => {
              if (!match) {
                return false;
              }}}>Topplistor</NavLink>
          </li>

          <li className="nav__menu-item">
            <NavLink to="/sample"   isActive={(match, location) => {
              if (!match) {
                return false;
              }}}>Grafer</NavLink>
          </li>

          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <span role="button" onMouseEnter={this.handleHover}>
              Kontakt
            </span>
            {this.state.showAboutMenu && <Submenu />}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;

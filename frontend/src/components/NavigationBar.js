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
            <NavLink to="/aboutTeam">Team</NavLink>
        </li>
        <li className="nav__submenu-item ">
            <NavLink to="/aboutFindwise">Findwise</NavLink>
        </li>
        <li className="nav__submenu-item ">
            <NavLink to="/aboutProject">Project</NavLink>
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
      showAboutMenu: false
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
              <NavLink to="/home">Home</NavLink>
          </li>

          <li className="nav__menu-item">
              <NavLink to="/toplists">Top List</NavLink>
          </li>

          <li className="nav__menu-item">
              <NavLink to="/sample">Sample</NavLink>
          </li>

          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <a href="/home" role="button" onMouseEnter={this.handleHover}>About</a>
            {this.state.showAboutMenu && <Submenu />}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;

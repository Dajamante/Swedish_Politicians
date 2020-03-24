import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";

/**
 * Submenu component specific for the "About" option in the navigation bar.
 */
class Submenu extends React.Component {
  render() {
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a>
            <NavLink to="/aboutTeam">Team</NavLink>
          </a>
        </li>
        <li className="nav__submenu-item ">
          <a>
            <NavLink to="/aboutFindwise">Findwise</NavLink>
          </a>
        </li>
        <li className="nav__submenu-item ">
          <a>
            <NavLink to="/aboutProject">Project</NavLink>
          </a>
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
            <a>
              <NavLink to="/home">Home</NavLink>
            </a>
          </li>

          <li className="nav__menu-item">
            <a>
              <NavLink to="/charts">Charts</NavLink>
            </a>
          </li>

          <li className="nav__menu-item">
            <a>
              <NavLink to="/sample">Sample</NavLink>
            </a>
          </li>

          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <a onMouseEnter={this.handleHover}>About</a>
            {this.state.showAboutMenu && <Submenu />}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;

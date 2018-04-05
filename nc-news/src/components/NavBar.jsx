import React from 'react';
import { NavLink } from 'react-router-dom';
import splash from '../images/northcoder-splash.png';

class NavBar extends React.Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-primary">
        <img
          height="80%"
          width="40%"
          src={splash}
          alt="north coders news logo"
        />
        <ul class="nav nav-tabs color-white">
          <li class="nav-item">
            <NavLink to="/" class="nav-link text-white">
              All
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="" class="nav-link text-white">
              topic 1
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="" class="nav-link text-white">
              topic 2
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="" class="nav-link text-white">
              topic 3
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default NavBar;

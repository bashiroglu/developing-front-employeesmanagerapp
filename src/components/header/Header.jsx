import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <div className=" w-100">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#d">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/employees-list">
                  All Emplooyes
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/employees-shifts">
                  Emplooyes shift page
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/sign-up-user-by-manager">
                  User Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link className="btn-light btn ml-auto" to="/logout">
            Log out
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;

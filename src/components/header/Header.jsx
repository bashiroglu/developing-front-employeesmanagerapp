import React from 'react';
import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../utils/context/authContext';

function Header() {
  return (
    <div className=" w-100">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#d">
          Employee Manager
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/employees-list">
                All Emplooyes
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/employees-shifts">
                Emplooyes shift page
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/sign-up">
                User Sign Up
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/employee-confirm">
                New Users
                <span className={`badge badge- ml-1`}></span>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/settings">
                Go to settings
              </NavLink>
            </li>
            {/* <li className="nav-item ">
              <Link className="nav-link" to="/notfication-page">
                Notfication Page
                <span className={`badge badge- ml-1`}></span>
              </Link>
            </li> */}
          </ul>
        </div>
        <Link className="btn-light btn ml-auto" to="/logout">
          Log out
        </Link>
      </nav>
    </div>
  );
}

export default Header;

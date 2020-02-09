import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../utils/context/authContext';
function Header() {
  const { userObject, logout } = useContext(AuthContext);
  const admin = userObject.role === 'admin';
  return (
    <div className=" w-100">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          {admin ? (
            <Link to="/employees-list" className="navbar-brand">
              Employee Manager
            </Link>
          ) : userObject.userId ? (
            <div className="navbar-brand">Employee Manager</div>
          ) : null}
          <ul className="navbar-nav">
            {userObject.userId ? (
              <>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/settings">
                    Go to settings
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/bookshift">
                    Book shift
                  </NavLink>
                </li>
              </>
            ) : null}

            {admin ? (
              <>
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
                  <NavLink className="nav-link" to="/sign-up-user-by-manager">
                    User Sign Up
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/employee-confirm">
                    New Users
                    <span className={`badge badge- ml-1`}></span>
                  </NavLink>
                </li>
              </>
            ) : null}
            {/* <li className="nav-item ">
              <Link className="nav-link" to="/notfication-page">
                Notfication Page
                <span className={`badge badge- ml-1`}></span>
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <Link className="btn-light btn ml-auto" to="/logout">
          Log out
        </Link> */}
        {userObject.userId ? (
          <button className="btn-light btn ml-auto" onClick={logout}>
            Log out
          </button>
        ) : null}
      </nav>
    </div>
  );
}

export default Header;

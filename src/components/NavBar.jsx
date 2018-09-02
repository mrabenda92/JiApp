import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav justify-content-center">
          <span className="navbar-brand" style={{ color: 'red' }}>Jī.App</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse nav justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <NavLink className="nav-item active" to="/">
                <span className="nav-link">
                  Zadania <span className="sr-only"></span>
                </span>
              </NavLink>
              <NavLink className="nav-item" to="/description">
                <span className="nav-link">Proste wyrażenia</span>
              </NavLink>
              <NavLink className="nav-item" to="/lists">
                <span className="nav-link">Lista znaków</span>
              </NavLink>
              <NavLink className="nav-item" to="/other">
                <span className="nav-link">O autorze</span>
              </NavLink>
            </ul>
          </div>
        </nav>
        <form className="form-signin">
          <img src={logo} alt="logo" />
        </form></div>
    );
  }
}

export default Navbar;
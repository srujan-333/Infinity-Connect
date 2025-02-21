import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm w-100  mb-0">
      <div className="d-flex flex-row justify-content-around w-100 p-3 pt-2 pb-2">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <span className="fw-semibold">SCM2.0</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* User Actions */}
        <div className="d-flex gap-2">
          <Link className="btn btn-dark" to="/user/profile">
            Sankeerth
          </Link>
          <Link className="btn btn-primary" to="/login">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

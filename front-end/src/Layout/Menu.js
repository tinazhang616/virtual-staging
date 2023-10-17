import React from "react";
import logo from "../image/logo-test.jpg";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Menu() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
      <div className="container-fluid ">
        <NavLink className="navbar-brand mx-auto fw-bold" to="/">
          VIRTUAL STAGING
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-medium fs-5">
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="/#"
                role="button"
                aria-expanded="false"
              >
                Service
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/virtual-staging"
                  >
                    Virtual Staging
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services/restyle">
                    Restyle
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services/remodel">
                    Remodel
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services/envision">
                    Envision
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/services/3d-floor-plan"
                  >
                    3D Floor Plan
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/services">
                    All Service &gt;
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="/#"
                role="button"
                aria-expanded="false"
              >
                Resources
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/furniture">
                    Furniture Library
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/affiliate-program">
                    Affiliate Program
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/account">
                Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <span className="fa fa-shopping-cart"></span>Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Menu;

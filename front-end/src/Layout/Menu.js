import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useSelector } from "react-redux";
function Menu() {
  const state = useSelector((state) => state.todos);
  let accountInfo = state.account;

  return (
    <div className="nav shadow-sm justify-content-between bg-white navbar navbar-expand-lg fixed-top">
      <div className="container-fluid mx-3">
        <NavLink className="navbar-brand fw-bold" to="/">
          VIRTUAL STAGING
        </NavLink>
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
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
                <NavLink className="nav-link" to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                {Object.keys(accountInfo).length ? (
                  <NavLink className="nav-link text-primary" to="/account">
                    Hi, <span className="fst-italic">{accountInfo.name}</span>
                  </NavLink>
                ) : (
                  <NavLink className="nav-link" to="/account">
                    Account
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <span className="fa fa-shopping-cart"></span>Cart (
                  {state.service.length})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;

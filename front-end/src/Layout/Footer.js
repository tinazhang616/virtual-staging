import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Footer() {
  return (
    <>
      <footer className="row py-4 py-md-5 text-light text-center">
        <div className="d-flex col-lg-8 mx-auto justify-content-around">
          <div className="col-lg-4 mb-3">
            <h5 className="my-4">Contact</h5>
            <ul
              className="list-unstyled small fs-6 fw-bolder"
              style={{ textDecoration: "none" }}
            >
              <li className="mb-2">
                <div>
                  <span className="fa fa-envelope-o me-3"></span>
                  <a
                    href="mailto:tinazhang616@gmail.com"
                    className="link-light"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tinazhang616@gmail.com
                  </a>
                </div>
              </li>
              <li className="mb-2">
                <div>
                  <span className="fa fa-phone me-3"></span>
                  <a
                    href="tel:713-992-0916"
                    className="link-light"
                    style={{ textDecoration: "none" }}
                  >
                    626-217-9631
                  </a>
                </div>
              </li>
              <li className="mb-2">
                <div>
                  <span className="fa fa-comment-o me-3"></span>
                  <a
                    className="link-light"
                    href="sms:(1)(6262179631) "
                    style={{ textDecoration: "none" }}
                  >
                    626-217-9621
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-3">
            <h5 className="my-4">Explore</h5>
            <ul
              className="list-unstyled small fs-6 fw-bolder"
              style={{ textDecoration: "none" }}
            >
              <li className="mb-2">
                <Link
                  to="/services"
                  className="link-light"
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/furniture"
                  className="link-light"
                  style={{ textDecoration: "none" }}
                >
                  Furniture Library
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/affiliate-program"
                  className="link-light"
                  style={{ textDecoration: "none" }}
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="my-4">Resources</h5>
            <ul
              className="list-unstyled small fs-6 fw-bolder"
              style={{ textDecoration: "none" }}
            >
              <li className="mb-2">
                <Link
                  to="/services"
                  className="link-light"
                  style={{ textDecoration: "none" }}
                >
                  Photography Guide
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/contact-us"
                  className="link-light"
                  style={{ textDecoration: "none" }}
                >
                  Send Us Your Photos
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="mx-auto text-center">© Virtual Staging Solution</div>
      </footer>
    </>
  );
}
export default Footer;

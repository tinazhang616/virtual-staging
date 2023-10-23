import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Footer() {
  return (
    <>
      <footer>
        <div className="row d-flex justify-content-around py-4 py-md-5 text-light">
          <div className="col-4 mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled small">
              <li className="mb-2">
                Designed and built with all the love in the world by the{" "}
                <a href="/docs/5.3/about/team/">Bootstrap team</a> with the help
                of{" "}
                <a href="https://github.com/twbs/bootstrap/graphs/contributors">
                  our contributors
                </a>
              </li>
              <li className="mb-2">
                Code licensed{" "}
                <a
                  href="https://github.com/twbs/bootstrap/blob/main/LICENSE"
                  target="_blank"
                  rel="license noopener noreferrer"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener noreferrer"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v5.3.2.</li>
            </ul>
          </div>
          <div className="col-3 col-lg-3 offset-lg-1 mb-3">
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/services">Service</Link>
              </li>
              <li className="mb-2">
                <Link to="/services">Furniture Library</Link>
              </li>
              <li className="mb-2">
                <Link className="" to="/services">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 col-lg-3 mb-3">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/docs/5.3/getting-started/">Getting started</a>
              </li>
              <li className="mb-2">
                <a href="/docs/5.3/examples/starter-template/">
                  Starter template
                </a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row text-center">Virtual Staging</div>
      </footer>
    </>
  );
}
export default Footer;

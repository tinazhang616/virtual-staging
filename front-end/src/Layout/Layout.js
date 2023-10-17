import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css";
import Footer from "./Footer";
function Layout() {
  return (
    <div>
      <div className="col">
        <div className="row">
          <Menu />
        </div>
        <div className="row mt-5 py-5">
          <div>
            <Routes />
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Layout;

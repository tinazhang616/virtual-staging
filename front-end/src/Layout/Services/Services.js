import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AllServices from "./component/AllServices";
export default function Services() {
  const history = useHistory();
  return (
    <div className="my-5 py-5">
      <section className="row col-md-8 mx-auto">
        <div className="col-md bg-service text-white p-0 rounded-left">
          <div className="col-8 m-auto">
            <h4 className="my-5 pt-3">Our Services</h4>
            <p className="fs-5">
              We won't play favorites. Explore all our services, all in one
              place.
            </p>
          </div>
        </div>
        <div className="col-md text-center p-0">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/photo-1617806118233-18e1de247200-1024x576.webp"
            alt="services"
            className="w-100 rounded-right"
          />
        </div>
      </section>
      {/* all services*/}
      <section className="row col-md-8 mx-auto my-5">
        <AllServices />
      </section>

      {/* questions*/}
      <hr className="col-md-8 mx-auto my-5" />
      <section className="d-flex justify-content-start col-md-8 mx-auto my-5 py-5">
        <h2>Have something else in mind?</h2>
        <button
          className="btn btn-primary mx-auto fs-4"
          style={{ textAlign: "center" }}
          onClick={() => history.push("/contact-us")}
        >
          Let's chat
        </button>
      </section>
    </div>
  );
}

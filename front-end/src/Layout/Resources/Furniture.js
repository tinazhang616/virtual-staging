import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Furniture() {
  const history = useHistory();
  return (
    <div className="my-5 py-5">
      {/* benefit of restyle */}
      <section className="row col-md-8 mx-auto my-5">
        <div className="m-auto col-md-10 text-center">
          <h1>Virtual Staging Furniture</h1>
          <p className="my-5 fs-5">
            Choose from our predesigned sets or let our designers choose for
            you. All furniture can be resized, color changed, and adapted to
            different layouts. Start Your Order
          </p>
        </div>
        <button
          className="btn btn-primary col-md-3 m-auto"
          onClick={() => history.push("/services")}
        >
          <span className="fa fa-shopping-cart me-3"></span>
          Add To Cart
        </button>
      </section>
      {/* photo gallery */}
      <section className="row col-md-8 mx-auto"></section>
    </div>
  );
}

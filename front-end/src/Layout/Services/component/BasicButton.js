import React from "react";
import VSPricingCard from "./VSPricingCard";
export default function BasicButton({ shoppingCart }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#VSModal"
      >
        Basic Service
      </button>

      <div
        className="modal fade"
        id="VSModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h1
                  className="modal-title fs-2 text-start"
                  id="exampleModalLabel"
                >
                  How many photos?
                </h1>
                <p className="d-block fs-5 text-start">
                  Purchase as many credits as you’d like. Try to show the major
                  areas and two angles of the most important rooms.
                </p>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex justify-content-around">
              <VSPricingCard quantity="4" />
              <VSPricingCard quantity="5" />
              <VSPricingCard quantity="6" />
              <VSPricingCard quantity="7" />
              <VSPricingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

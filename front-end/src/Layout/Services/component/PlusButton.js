import React from "react";
import VSPricingPlusCard from "./VSPricingPlusCard";
export default function PlusButton() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#VSModalPlus"
      >
        Plus Service
      </button>

      <div
        className="modal fade"
        id="VSModalPlus"
        tabIndex="-1"
        aria-labelledby="VSModalPlusLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h1 className="modal-title fs-2" id="VSModalPlusLabel">
                  How many photos?
                </h1>
                <p className="d-block">
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
              <VSPricingPlusCard quantity="4" />
              <VSPricingPlusCard quantity="5" />
              <VSPricingPlusCard quantity="6" />
              <VSPricingPlusCard quantity="7" />
              <VSPricingPlusCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

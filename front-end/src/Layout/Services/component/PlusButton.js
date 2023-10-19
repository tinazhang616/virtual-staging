import React from "react";
import VSPricingCard from "./VSPricingCard";
export default function PlusButton({ shoppingCart }) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#VSModal"
      >
        Plus Service
      </button>

      <div
        className="modal fade"
        id="VSModal"
        tabIndex="-1"
        aria-labelledby="VSModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h1 className="modal-title fs-2" id="VSModalLabel">
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
              <VSPricingCard
                price="300"
                quantity="4"
                shoppingCart={shoppingCart}
              />
              <VSPricingCard
                price="375"
                quantity="5"
                shoppingCart={shoppingCart}
              />
              <VSPricingCard
                price="450"
                quantity="6"
                shoppingCart={shoppingCart}
              />
              <VSPricingCard
                price="525"
                quantity="7"
                shoppingCart={shoppingCart}
              />
              <VSPricingCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

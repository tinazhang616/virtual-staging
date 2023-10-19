import React from "react";
import PlusButton from "./PlusButton";
export default function PlusService() {
  return (
    <div className="card price text-left border-dark">
      <div className="card-body">
        <h5 className="card-title">Plus</h5>
        <h5 className="card-title text-secondary">
          <del>$149</del>
        </h5>
        <h1 className="card-title">$99</h1>
        <h5 className="card-title">Per Photo</h5>
        <h5 className="card-title text-secondary">
          Best for businesses & professionals
        </h5>
      </div>
      <hr className="mx-3" />

      <ul className="ist-group-flush">
        <li className="mx-3 mb-2">Everything from Basic plus...</li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>Next Day
          Delivery
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>4 Revision
          Rounds
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>Senior
          Designers
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>
          Commercial & Residential
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>
          Customize Furniture
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>
          Paint Walls (optional)
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>Change
          Flooring (optional)
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>VIP Support
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>Quick-Start
          Invoicing
        </li>
        <li className="">
          <span className="fa fa-plus text-success mx-3 mb-2"></span>Vendor
          Billing & Compliance
        </li>
      </ul>
      <div className="card-body text-center my-3">
        <PlusButton />
      </div>
    </div>
  );
}

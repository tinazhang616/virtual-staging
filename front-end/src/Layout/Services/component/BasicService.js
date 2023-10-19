import React from "react";
import BasicButton from "./BasicButton";
export default function BasicService() {
  return (
    <div className="card price text-left">
      <div className="card-body">
        <h5 className="card-title">Basic</h5>
        <h5 className="card-title text-secondary">
          <del>$99</del>
        </h5>
        <h1 className="card-title">$75</h1>
        <h5 className="card-title">Per Photo</h5>
        <h5 className="card-title text-secondary">Best for individuals</h5>
      </div>
      <hr className="mx-3" />
      <ul className="list-group-flush">
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>Credits
          That Never Expire
        </li>
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>1-2 Day
          Delivery
        </li>{" "}
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>2
          Revision Rounds
        </li>{" "}
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>
          Research-Backed Designs
        </li>{" "}
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>
          Photorealistic Results
        </li>
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>
          Happiness Guarantee
        </li>
        <li className="">
          <span className="fa fa-check text-secondary mx-3 mb-2"></span>Bulk
          Discounts
        </li>
      </ul>
      <div className="card-body text-center my-3">
        <BasicButton />
      </div>
    </div>
  );
}

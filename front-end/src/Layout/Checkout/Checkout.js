import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartDetails from "./component/CartDetails";
import SuperCharge from "./component/SuperCharge";
import CartTotals from "./component/CartTotals";
export default function Checkout() {
  const state = useSelector((state) => state.todos);
  return (
    <div>
      <div className="my-5 py-5">
        <section className="col-md-8 mx-auto">
          <h3>Your order summary</h3>
          <div className="my-5">
            <CartDetails />
          </div>
        </section>
        <section className="col-md-8 mx-auto d-flex justify-content-between my-5">
          <SuperCharge />
          <CartTotals />
        </section>
      </div>
    </div>
  );
}

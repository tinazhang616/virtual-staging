import React from "react";
import PriceDetail from "./PriceDetail";
import { useSelector } from "react-redux";
import MakePayment from "./MakePayment";
export default function Checkout() {
  const state = useSelector((state) => state.todos);
  console.log("items in cart => ", state);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#</th>
            <th scope="col">Service</th>
            <th scope="col">price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <MakePayment />
    </div>
  );
}

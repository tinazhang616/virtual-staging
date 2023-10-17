import React from "react";
import PriceDetail from "./PriceDetail";
export default function Checkout({ shoppingCart }) {
  console.log("this is shoppingcart", shoppingCart);
  return (
    <div>
      <table class="table">
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
        <tbody>
          <PriceDetail />
        </tbody>
      </table>
    </div>
  );
}

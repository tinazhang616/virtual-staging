import React from "react";
export default function PriceOnCheckOut({ e, state }) {
  const discount = state.discount;
  const VSDiscount = state.VSDiscount;
  let price = e.price;
  console.log("this is price", discount, VSDiscount, price);
  if (
    e.service === "Virtual Staging" ||
    e.service === "Virtual Staging - Plus"
  ) {
    price = price * VSDiscount;
  }
  return discount === 1 ? (
    <td>{price}</td>
  ) : (
    <td>
      <del className="me-2 text-danger">{e.price}</del>
      {price * discount}
    </td>
  );
}

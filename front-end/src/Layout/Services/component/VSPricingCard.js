import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function VSPricingCard({ price, quantity, shoppingCart }) {
  const history = useHistory();
  let card = (
    <div>
      <h5 className="card-title fs-3">{quantity} Photos</h5>
      <p className="card-text fs-2 text-primary-emphasis">${price}</p>
    </div>
  );
  const itemDetail = { virtual_staging: [price, quantity] };
  const handleClick = (e) => {
    e.preventDefault();
    shoppingCart.push(itemDetail);
    history.push("/cart");
  };
  return (
    <div className="card text-center" style={{ width: "10rem" }}>
      <div className="card-body ">
        {price ? card : <h5 className="card-title fs-3">Other Amount</h5>}
        <button
          data-bs-dismiss="modal"
          type="button"
          className="btn btn-primary active"
          onClick={handleClick}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

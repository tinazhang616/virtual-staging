import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { todoAdded } from "../../../redux/reducers/todosSlice";

export default function VSPricingPlusCard({ quantity }) {
  const dispatch = useDispatch();
  const itemDetail = {
    service: "Virtual Staging Plus",
    price: 99,
    quantity,
  };
  const history = useHistory();
  let card = (
    <div>
      <h5 className="card-title fs-3">{quantity} Photos</h5>
      <p className="card-text fs-2 text-primary-emphasis">
        ${itemDetail.price}
      </p>
    </div>
  );

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(todoAdded(itemDetail));
    history.push("/cart");
  };
  return (
    <div className="card text-center" style={{ width: "10rem" }}>
      <div className="card-body ">
        {quantity ? card : <h5 className="card-title fs-3">Other Amount</h5>}
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

import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { todoAdded } from "../../../redux/reducers/todosSlice";

export default function ServiceAddtoCartButton({ service, price }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const intialRestyle = {
    service,
    price,
    quantity: 1,
  };
  const [restyle, setRestyle] = useState({ ...intialRestyle });
  const onChange = (e) => {
    setRestyle({
      ...restyle,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddtoCart = (e) => {
    e.preventDefault();
    dispatch(todoAdded(restyle));
    history.push("/cart");
    console.log("this is restyle detail", restyle);
  };
  return (
    <div className="flex-row d-flex mb-3">
      <div className="input-group-lg mr-5 col-2 px-0">
        <input
          name="quantity"
          type="number"
          className="form-control input-restyle"
          placeholder="1"
          onChange={onChange}
          value={restyle.quantity}
        />
      </div>
      <button
        className="btn btn-outline-primary w-100"
        style={{ textAlign: "center" }}
        onClick={handleAddtoCart}
      >
        <span className="fa fa-shopping-cart me-3"></span>
        Add To Cart
      </button>
    </div>
  );
}

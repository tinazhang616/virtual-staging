import React from "react";
import { useSelector } from "react-redux";
import CartDetails from "./component/CartDetails";
import SuperCharge from "./component/SuperCharge";
import CartTotals from "./component/CartTotals";
import totalPrice from "../../utils/totalPrice";
export default function Checkout() {
  const state = useSelector((state) => state.todos);
  console.log("this is state in checkout", state);
  let total = totalPrice(state);
  console.log("this is total price", total);
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
          <CartTotals total={total} />
        </section>
      </div>
    </div>
  );
}

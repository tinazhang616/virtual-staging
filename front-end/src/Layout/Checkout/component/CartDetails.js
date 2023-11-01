import { useDispatch, useSelector } from "react-redux";
import {
  todoDel,
  todoUpdate,
  todoDiscount,
} from "../../../redux/reducers/todosSlice";
import { useState } from "react";
import UpdateCart from "./UpdateCart";
import ReferralCode from "./ReferralCode";
import PriceOnCheckOut from "./PriceOnCheckOut";
import updateService from "../../../utils/updateService";
export default function CartDetails() {
  const [updatedServices, setUpdatedServices] = useState({});
  const [referralCode, setReferralCode] = useState("");
  const [codeNotValid, setCodeNotValid] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);
  const handleReferralChange = (e) => {
    e.preventDefault();
    setCodeNotValid(false);
    setReferralCode(e.target.value);
  };
  /*verify discount code. 
apply it to state if true 
otherwise a notification will display on screen */
  const handleReferralApply = (e) => {
    e.preventDefault();
    if (referralCode === "save20") {
      dispatch(todoDiscount(0.8));
    } else {
      setCodeNotValid(true); //there is a warning when this is true
    }
  };
  const dispatch = useDispatch();
  /*delete a selected service and update it on state */
  const handleDelete = (e) => {
    e.preventDefault();
    let deleteItem = e.target.getAttribute("name");
    dispatch(todoDel(deleteItem));
  };
  /*change the quantity of service and set update to true
update in the next step */
  const handleChange = (e) => {
    e.preventDefault();
    setUpdatedServices({
      ...updatedServices,
      [e.target.id]: e.target.value,
    });
    setNeedUpdate(true);
  };
  /**update the state if the quantity changes, and set update to false incase update repeatly */
  const handleCartUpdate = (e) => {
    e.preventDefault();
    let update = updateService(state, updatedServices);
    if (needUpdate) {
      dispatch(todoUpdate(update));
    }
    setNeedUpdate(false);
  };
  const state = useSelector((state) => state.todos);
  return (
    <div>
      {state.service.length === 0 ? (
        <p className="fs-5 fw-bolder">Cart is empty</p>
      ) : (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Service</th>
                <th scope="col">price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {state.service.map((e) => {
                return (
                  <tr key={e.service}>
                    <th className="d-flex justify-content-start">
                      <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={handleDelete}
                      >
                        <span aria-hidden="true" name={e.service}>
                          &times;
                        </span>
                      </button>
                    </th>
                    <td className="">{e.service}</td>
                    <PriceOnCheckOut e={e} state={state} />
                    <td>
                      <label htmlFor={e.service} className="form-label"></label>
                      <input
                        type="number"
                        className="form-label col-lg-2 text-center"
                        id={e.service}
                        name="quantity"
                        placeholder={e.quantity}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      $
                      {+e.quantity *
                        +e.price *
                        state.discount *
                        (e.service === "Virtual Staging"
                          ? state.VSDiscount
                          : "Virtual Staging - Plus"
                          ? state.VSDiscount
                          : 1)}
                      .00
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <ReferralCode
              handleReferralChange={handleReferralChange}
              handleReferralApply={handleReferralApply}
              referralCode={referralCode}
            />
            <UpdateCart handleUpdate={handleCartUpdate} />
          </div>
          {codeNotValid && (
            <p className="text-danger">Referral or discount code not valid.</p>
          )}
        </div>
      )}
    </div>
  );
}

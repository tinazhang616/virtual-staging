import totalPrice from "../../utils/totalPrice";
import ReturningCustomer from "./component/ReturningCustomer";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { createOrder } from "../../utils/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MakePayment() {
  const history = useHistory();
  const state = useSelector((state) => state.todos);
  const discount = state.discount;
  const VSDiscount = state.VSDiscount;
  const [ordered, setOrdered] = useState(false);
  let total = totalPrice(state);
  const { register, handleSubmit, reset } = useForm();
  // const [orderDetail, setOrderDetail] = useState({});

  const onSubmit = async (data) => {
    // create new order of the service to database, also customer information data to database
    let services = state.service;
    let orders = {};
    services.forEach((e) => (orders[e.service] = +e.quantity));
    const controller = new AbortController();
    try {
      await createOrder(orders, controller.signal);
      reset();
      setOrdered(true);
      history.push("/checkout");
    } catch (error) {
      console.log(error);
    }

    return () => controller.abort();
  };

  return (
    <div className="row col-md-8 mx-auto">
      {ordered && <h1>Thanks for shopping with Virtual Staging Solutions</h1>}
      <div className="row g-5">
        <div>
          <ReturningCustomer />
        </div>
        {/* order detail */}
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your order</span>
            <span className="badge bg-primary rounded-pill">
              {state.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {state.service.map((e) => {
              return (
                <li
                  key={e.service}
                  className="list-group-item d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 class="my-0">
                      {e.service}{" "}
                      <small class="text-muted">x {e.quantity}</small>
                    </h6>
                  </div>
                  <span class="text-muted">
                    $
                    {e.quantity *
                      e.price *
                      discount *
                      (e.service === "Virtual Staging"
                        ? VSDiscount
                        : e.service === "Virtual Staging - Plus"
                        ? VSDiscount
                        : 1)}
                  </span>
                </li>
              );
            })}

            <li class="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$ {total}</strong>
            </li>
          </ul>
        </div>
        {/* customer and payment detail */}
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Account details</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="needs-validation"
            noV
            alidate=""
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  {...register("name")}
                  required
                />
              </div>

              <div className="col-sm-6">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  {...register("email")}
                  required
                />
              </div>

              <div className="col-12">
                <label className="form-label">Company (optional)</label>
                <input className="form-control" {...register("company")} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Zip Code</label>
                <input className="form-control" />
              </div>

              <div class="col-md-6">
                <label className="form-label">Country</label>
                <select className="form-select">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-6">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select class="form-select" id="state">
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>

            <hr class="my-4" />
            <div className="col-12 p-0">
              <h4 className="my-3">Additional information</h4>
              <label className="form-label">
                Invoice Description (optional)
              </label>
              <input
                className="form-control"
                placeholder="Project name to show on invoice"
                {...register("invoiceInfo")}
              />
            </div>

            <hr class="my-4" />

            <h4 class="mb-3">Payment</h4>

            <div class="my-3">
              <div class="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  checked=""
                  required=""
                />
                <label class="form-check-label" for="credit">
                  Credit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required=""
                />
                <label class="form-check-label" for="debit">
                  Debit card
                </label>
              </div>
              <div class="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  class="form-check-input"
                  required=""
                />
                <label class="form-check-label" for="paypal">
                  PayPal
                </label>
              </div>
            </div>

            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">
                  Name on card
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-name"
                  placeholder=""
                  required=""
                />
                <small class="text-muted">Full name as displayed on card</small>
                <div class="invalid-feedback">Name on card is required</div>
              </div>

              <div class="col-md-6">
                <label for="cc-number" class="form-label">
                  Credit card number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-number"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">
                  Credit card number is required
                </div>
              </div>

              <div class="col-md-3">
                <label for="cc-expiration" class="form-label">
                  Expiration
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-expiration"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">Expiration date required</div>
              </div>

              <div class="col-md-3">
                <label for="cc-cvv" class="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cc-cvv"
                  placeholder=""
                  required=""
                />
                <div class="invalid-feedback">Security code required</div>
              </div>
            </div>

            <hr class="my-4" />

            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

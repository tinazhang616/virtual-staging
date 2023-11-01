import totalPrice from "../../utils/totalPrice";
import ReturningCustomer from "./component/ReturningCustomer";
import { useSelector } from "react-redux";

export default function MakePayment() {
  const state = useSelector((state) => state.todos);
  const discount = state.discount;
  const VSDiscount = state.VSDiscount;
  console.log("this is state at payout", state);
  let total = totalPrice(state);

  return (
    <div className="row col-md-8 mx-auto">
      <div className="row g-5">
        <div>
          <ReturningCustomer />
        </div>
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
                <li className="list-group-item d-flex justify-content-between lh-sm">
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
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Account details</h4>
          <form class="needs-validation" noV alidate="">
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">
                  First name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required=""
                />
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="col-12">
                <label htmlFor="company" className="form-label">
                  Company (optional)
                </label>
                <input type="text" className="form-control" id="company" />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="zip" className="form-label">
                  Zip Code
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="zip"
                  required
                />
              </div>

              <div class="col-md-6">
                <label for="country" class="form-label">
                  Country
                </label>
                <select class="form-select" id="country" required="">
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
              <label htmlFor="information" className="form-label">
                Invoice Description (optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="information"
                placeholder="Project name to show on invoice"
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

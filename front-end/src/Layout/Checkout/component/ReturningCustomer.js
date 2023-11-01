import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ReturningCustomer() {
  return (
    <div className="shadow-sm rounded">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <span className="fa fa-user-circle me-2"></span>
              Returning customer?
              <span className="ms-3" style={{ textDecoration: "underline" }}>
                Click here to login
              </span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <p className="fs-5">
                If you have shopped with us before, please enter your details
                below. If you are a new customer, please proceed to the Billing
                section.
              </p>
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    required
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
                <div class="col-12">
                  <Link
                    type="submit"
                    className="text-dark fw-bolder"
                    style={{ textDecoration: "none" }}
                    to="password-reset"
                  >
                    Lost your password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

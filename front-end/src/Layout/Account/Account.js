import React from "react";
function Account() {
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-around">
          {/* log in */}
          <div className="col-md-5">
            <h2>Login</h2>
            <hr />
            <button className="btn btn-primary mb-4 w-100">
              <span className="fa fa-google me-2"></span>Sign in With Google
            </button>
            <button className="btn btn-primary mb-4 w-100">
              <span className="fa fa-facebook me-2"></span>Sign in With Facebook
            </button>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary my-5 w-100"
              >
                <span className="fa fa-sign-in me-2"></span>Login
              </button>
            </form>
          </div>
          {/* register */}
          <div className="col-md-5">
            <h2>Register</h2>
            <hr />
            <button className="btn btn-primary mb-4 w-100">
              <span className="fa fa-google me-2"></span>Sign up With Google
            </button>
            <button className="btn btn-primary mb-4 w-100">
              <span className="fa fa-facebook me-2"></span>Sign up With Facebook
            </button>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">
                  Username
                </label>
                <input type="text" className="form-control" id="exampleInput" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail2" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword2" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck2"
                />
                <label className="form-check-label" htmlFor="exampleCheck2">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary my-5 w-100"
              >
                <span className="fa fa-sign-in me-2"></span>Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Account;

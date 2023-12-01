import React, { useState } from "react";
import { listAccount, createAccount } from "../../utils/api";
import ErrorAlert from "../ErrorAlert";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { todoLogin, todoUpdate } from "../../redux/reducers/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
import { handleGoogleSignUp } from "../../utils/SignUp";
function Account() {
  const state = useSelector((state) => state.todos);
  let accountInfo = state.account;
  const dispatch = useDispatch();
  const history = useHistory();
  const initialLoginData = {
    email: "",
    password: "",
  };
  let [editErrors, setEditErrors] = useState(null);
  let [registerErrors, setRegisterErrors] = useState(null);
  //handle login information
  const [loginData, setLoginData] = useState({ ...initialLoginData });
  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginEmail = loginData.email;
    const controller = new AbortController();
    try {
      let result = await listAccount(loginEmail, controller.signal);
      if (result.password !== loginData.password) {
        setEditErrors({ message: "Password is not correct." });
      } else {
        // console.log("this is result", result);
        dispatch(todoLogin(result));
        history.push("/");
      }
    } catch (error) {
      setEditErrors(error);
    }
    return () => controller.abort();
  };
  //handle resigter information
  const initialRegisterData = {
    name: "",
    email: "",
    password: "",
  };
  const [registerData, setRegisterData] = useState({ ...initialRegisterData });
  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    try {
      await createAccount(registerData, controller.signal).then((result) =>
        dispatch(todoLogin(result))
      );
      history.push("/");
    } catch (error) {
      setRegisterErrors(error);
    }
    return () => controller.abort();
  };
  const handleLogout = (e) => {
    e.preventDefault();
    const newState = { ...state, account: {} };
    dispatch(todoUpdate(newState));
    history.push("/");
  };
  return (
    <>
      <div className="container my-5">
        {Object.keys(accountInfo).length ? (
          <div>
            Hello
            <button onClick={handleLogout}>log out</button>
          </div>
        ) : (
          <div className="row d-flex justify-content-around">
            {/* log in */}
            <div className="col-md-5">
              <h2>Login</h2>
              <hr />
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={handleLoginChange}
                    value={loginData.email}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleLoginChange}
                    value={loginData.password}
                    required
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
                <ErrorAlert error={editErrors} />
                <button
                  type="submit"
                  className="btn btn-outline-primary my-5 w-100"
                  onClick={handleLogin}
                >
                  <span className="fa fa-sign-in me-2"></span>Login
                </button>
              </form>
            </div>
            {/* register */}
            <div className="col-md-5">
              <h2>Register</h2>
              <hr />
              <GoogleLogin
                className="btn btn-primary mb-4 w-100"
                clientId="AIzaSyBQf5drOh_oPJ92xsPMBJsVqnhuyG-N5Vo"
                buttonText="Sign up with Google"
                onSuccess={handleGoogleSignUp}
                onFailure={handleGoogleSignUp}
                cookiePolicy={"single_host_origin"}
              />
              <form>
                <div className="mb-3">
                  <label htmlFor="nameregister" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameregister"
                    name="name"
                    onChange={handleRegisterChange}
                    value={registerData.name}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailregister" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailregister"
                    aria-describedby="emailHelp"
                    name="email"
                    onChange={handleRegisterChange}
                    value={registerData.email}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordregister" className="form-label">
                    Password
                  </label>
                  <input
                    type="passwordregister"
                    className="form-control"
                    id="passwordregister"
                    name="password"
                    onChange={handleRegisterChange}
                    value={registerData.password}
                    required
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
                <ErrorAlert error={registerErrors} />
                <button
                  type="submit"
                  className="btn btn-outline-primary my-5 w-100"
                  onClick={handleRegister}
                >
                  <span className="fa fa-sign-in me-2"></span>Register
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Account;

import { todoLogin } from "../redux/reducers/todosSlice";
import { createAccount } from "./api";
export const handleGoogleSignUp = async (response, dispatch, history) => {
  // Extract user information from response
  const { email, name, googleId } = response.profileObj;
  const userData = {
    email,
    name,
    password: googleId, // You might want to handle this differently
    // Other necessary data
  };

  try {
    const result = await createAccount(userData);
    // Dispatch action to log the user in
    dispatch(todoLogin(result));
    history.push("/");
  } catch (error) {
    // Handle errors, such as user already exists
  }
};
export const handleFaceBookSignUp = async (response, dispatch, history) => {
  // Extract user information from response
  const { email, name, id: facebookId } = response;
  const userData = {
    email,
    name,
    password: facebookId, // Handle this according to your security standards
    // Other necessary data
  };

  try {
    const result = await createAccount(userData);
    // Dispatch action to log the user in
    dispatch(todoLogin(result));
    history.push("/");
  } catch (error) {
    // Handle errors
  }
};

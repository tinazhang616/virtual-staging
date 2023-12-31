const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";
/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

/**
 * Fetch `json` from the specified URL and handle error status codes and ignore `AbortError`s
 *
 * This function is NOT exported because it is not needed outside of this file.
 *
 * @param url
 *  the url for the requst.
 * @param options
 *  any options for fetch
 * @param onCancel
 *  value to return if fetch call is aborted. Default value is undefined.
 * @returns {Promise<Error|any>}
 *  a promise that resolves to the `json` data or an error.
 *  If the response is not in the 200 - 399 range the promise is rejected.
 */
async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

/**
 * Retrieves existing account.
 * @returns {Promise<[account]>}
 *  a promise that resolves to a possibly empty array of account saved in the database.
 */

export async function listAccount(params, signal) {
  const url = new URL(`${API_BASE_URL}/accounts`);
  url.searchParams.append("email", params.toString());
  return await fetchJson(url, { headers, signal }, []);
}
export async function listOrders(signal) {
  const url = new URL(`${API_BASE_URL}/shoppings`);
  return await fetchJson(url, { headers, signal }, []);
}

export async function createAccount(params, signal) {
  console.log("I want to see data", params);
  const url = new URL(`${API_BASE_URL}/accounts`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: params }),
    signal,
  };
  return await fetchJson(url, options, []);
}

export async function createOrder(params, signal) {
  const url = new URL(`${API_BASE_URL}/shopping/`);
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: params }),
    signal,
  };
  return await fetchJson(url, options, []);
}

export async function checkoutCart(order_id, signal) {
  const url = new URL(`${API_BASE_URL}/shopping/${order_id}`);
  const options = {
    method: "GET",
    headers,
    signal,
  };
  return await fetchJson(url, options, []);
}

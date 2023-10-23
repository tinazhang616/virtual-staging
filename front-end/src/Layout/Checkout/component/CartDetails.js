import { useDispatch, useSelector } from "react-redux";
import { todoDel } from "../../../redux/reducers/todosSlice";

export default function CartDetails() {
  const state = useSelector((state) => state.todos);
  console.log("items in cart => ", state);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    let deleteItem = e.target.getAttribute("name");
    dispatch(todoDel(deleteItem));
  };

  return (
    <div>
      {state.length == 0 ? (
        <p className="fs-5 fw-bolder">Cart is empty</p>
      ) : (
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
            {state.map((e) => {
              return (
                <tr>
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
                  <td>${e.price}.00</td>
                  <td>{e.quantity}</td>
                  <td>${+e.quantity * +e.price}.00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

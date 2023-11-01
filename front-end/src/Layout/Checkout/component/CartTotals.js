import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function CartTotals({ total }) {
  const history = useHistory();
  const handleCheckout = (e) => {
    e.preventDefault();
    history.push("/checkout");
  };
  return (
    <div className="col-md-4 p-4 ms-4">
      <h4 className="mb-3">Cart totals</h4>
      <div>
        <table className="table table-borderless bg-light p-5 rounded">
          <tr className="fs-5 py-2">
            <th>Subtotal</th>
            <td>$ {total ? total : 0}</td>
          </tr>
          <tr className="fs-5 py-2">
            <th>Total</th>
            <td className="fw-bolder">$ {total ? total : 0}</td>
          </tr>
        </table>
      </div>
      <button type="button" className="btn btn-dark w-100 my-5">
        Buy with <span className="fa fa-google me-1"></span>Pay
      </button>
      <div className="fs-4 text-center">— OR —</div>
      <button
        type="button"
        className="btn btn-primary w-100 my-5 fs-4"
        onClick={handleCheckout}
      >
        Proceed to checkout &rarr;
      </button>
    </div>
  );
}

import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function RestyleQuestions() {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button fs-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What's the difference between Restyle and Remodel?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-left fs-5">
            Our Restyle service is for removing non-structural items such as
            furniture and staging with new furniture. Our Remodel service is for
            more advanced structural edits like changing ceilings, floors,
            walls, and built-in cabinets.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            How much furniture can you remove?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            We’ll remove all furniture shown in the photo. If there is anything
            you’d like us to not remove let us when submitting your order.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            What if I only want furniture removed and not added back in?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            Check out our{" "}
            <Link className="fw-bold" to="/services/restyle">
              Remove service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

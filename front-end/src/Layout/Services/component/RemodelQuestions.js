import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function RemodelQuestions() {
  const history = useHistory();
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
            Can you remove a wall to create an open floor plan
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            Yes! If you could provide photos of the room that will be seen on
            the other side of the removed wall that would be very helpful. If
            not, we may still be able to help. Don’t hesitate to contact us with
            your project details.
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
            I have specific paint codes and floor samples, can you use those?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            We can. We’ll match all of the finishes you provide us with.
            Depending on the type of finish we can usually get within 80-100%
            accuracy of the examples you provide. Actual photos are very helpful
            or you can provide manufacturer name and model numbers.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Can you Remodel an exterior?
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            We can, new roofing, siding, doors, windows, and more… Let us know
            what you need.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnvisionQuestions() {
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
            What's the difference between Envision and Remodel?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body text-left fs-5">
            Our Envision service is for advanced projects that need 3D
            architectural renderings from a blank slate. The most common use
            case is starting from floor plans or blue prints. Our Remodel
            service is more commonly used when you have a photograph of the area
            and need just a few structural or finish modifications.
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
            What information do you need?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            Your floor plans or blueprints and any elevation drawings of the
            exterior and/or kitchen cabinet layout if you have them. You can
            also provide photos of finishes such as flooring, paint colors,
            cabinet style, countertops, light and plumbing fixtures, crown
            molding, etc… You can get as detailed as you’d like or leave it up
            to us to design.
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
            Can you render a house on a photo of the lot?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body fs-5 text-left">
            We can. If you have an empty lot photo we can show the exterior of
            the house built on that lot and also use the lot photo to show more
            accurate window views from inside of any interior architectural
            renderings that we create.
          </div>
        </div>
      </div>
    </div>
  );
}

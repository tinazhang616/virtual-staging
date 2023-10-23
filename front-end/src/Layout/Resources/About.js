import React from "react";
export default function AboutUs() {
  return (
    <div className="my-5 py-5">
      <div className="row col-md-8 mx-auto">
        <div className="col-md-8 mx-auto">
          <h2>
            We're here to make home buying more informed and inspiring for
            everyone.
          </h2>
          <div className="d-flex justify-content-between">
            <div className="col-md-5 rounded py-2 my-4" id="service">
              <h4>Launched in</h4>
              <h2>2016</h2>
            </div>
            <div className="col-md-5 rounded py-2 my-4" id="service">
              <h4>Photos staged</h4>
              <h2>50,000+</h2>
            </div>
          </div>
          <div className="fs-5 mt-3">
            <p>
              Virtual Staging Solutions was created for real estate
              professionals that share our passion for doing what is right by
              home buyers.
            </p>
            <p>
              For us, virtual staging isn’t just about pretty pictures or fancy
              marketing – It’s an effective tool, a competitive differentiator,
              and an incredible way to help home buyers make more informed
              decisions during one of the most important times of their lives.
            </p>
          </div>
        </div>

        <div className="col-md-8 mx-auto fs-5 mt-3">
          <p>
            Whether it’s a residential, commercial, or rental real estate
            transaction the process can be daunting. Buyers are trying to
            imagine their future and sellers are trying to guide them.
          </p>
          <p>
            Imagining and portraying ideas of how a property will be used is no
            easy task. Virtual Staging Solutions has been here to help put ideas
            down on paper, inspire, encourage, and empower everyone along the
            way.
          </p>
        </div>
      </div>
      <div className="row col-md-8 mx-auto my-5">
        <h2 className="mx-auto text-center my-5">Our Clients</h2>
        <div className="col-md-8 m-auto">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos.png"
            alt="our clients"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ServiceAddtoCartButton from "./component/ServiceAddtoCartButton";

export default function FloorPlan() {
  return (
    <div className="my-5 py-5">
      <section className="row col-md-8 mx-auto">
        <div className="col-md me-3">
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <h1>3D Floor Plans</h1>
          <p className="fs-5">
            Our 3D floor plans efficiently show off a property’s layout and
            features at a glance.
          </p>
          <div className="my-5">
            <h2>$99</h2>
            <p className="fs-4">Per Level</p>
          </div>
          <ServiceAddtoCartButton service="3D Floor Plan" price="99" />
        </div>
        <div className="col-md text-center">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/3Dfloorplan-2048x2048.jpg"
            alt="restyle"
            className="w-100"
          />
        </div>
      </section>
      {/* benefit of restyle */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="m-auto col-md-8 text-center">
          <h2>Virtual Floor Plans</h2>
          <h5 className="my-5">
            The fastest way to get the right buyer in the door. We’ll create a
            3D floor plan of each level starting from any type of plan you can
            provide such as 2D floor plans, blueprints, sketches, or Matterport
            tours.
          </h5>
        </div>
        <div className="d-md-flex justify-content-between flex-wrap">
          <div className="col-md-4 text-center">
            <div className="card bg-primary">
              <div className="card-body">
                <span className="fa fa-clock-o fa-4x text-primary m-3"></span>
                <h3 className="card-title">Fast Turnaround</h3>
                <p className="fs-5">
                  Ready in 1 day. We'll work with your schedule and you can
                  start using your new photos quickly.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card">
              <div className="card-body">
                <span className="fa fa-smile-o fa-4x text-primary m-3"></span>
                <h3 className="card-title">Happiness Guaranteed</h3>
                <p className="fs-5">
                  If you don't love your final photos we'll give you a full
                  refund. No questions. No hassles.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="card">
              <div className="card-body">
                <span className="fa fa-refresh fa-4x text-primary m-3"></span>
                <h3 className="card-title">Free Revisions</h3>
                <p className="fs-5">
                  Need a change? Revisions are quick and easy. We'll make
                  changes at no extra charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* process */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/blueprint-1024x934.png"
              alt="send"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>1. Send us your existing plans or virtual tour</h3>
            <p className="fs-5">
              We can work from any existing plans that you have such as
              blueprints, 2D floor plans, sketches, or some virtual tours like
              Matterport.
            </p>
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>2. Tell us about them</h3>
            <p className="fs-5">
              Tell us about your plans and if you’d like furniture, room names,
              or dimensions shown on your 3D floor plan.
            </p>
          </div>
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/scott-graham-5fNmWej4tAA-unsplash-1024x683.jpg"
              alt="needs"
            />
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/3Dfloorplan-2048x2048.jpg"
              alt="delivery"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>3. Start Impressing</h3>
            <p className="fs-5">
              We’ll notify you once your 3D floor plan is complete. For most
              projects this is usually within 1-2 days of submitting your
              project. Review your completed virtual remodel and let us know
              what you think. If you need any changes, we’ll make adjustments.
              You can then start using your floor plan in all of your marketing
              across the web, in print, and everywhere you’d like.
            </p>
          </div>
        </div>
      </section>
      {/* price */}
      <section className="row col-md-8 mx-auto rounded py-5 " id="service">
        <div className="text-center">
          <h2>Ready to start?</h2>
          <p className="fs-5 mb-5 pb-3 ">
            Have our highly skilled design team on your side in minutes.
          </p>

          <div className="row-col-8 d-flex justify-content-center">
            <ServiceAddtoCartButton service="3D Floor Plan" price="99" />
          </div>
        </div>
      </section>
    </div>
  );
}

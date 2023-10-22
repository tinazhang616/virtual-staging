import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ServiceAddtoCartButton from "./component/ServiceAddtoCartButton";
import RemodelPhotos from "./component/RemodelPhotos";
import RemodelQuestions from "./component/RemodelQuestions";

export default function Remodel() {
  const history = useHistory();
  return (
    <div className="my-5 py-5">
      <section className="row col-md-8 mx-auto">
        <div className="col-md me-3">
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <h1>Remodel</h1>
          <h5 className="my-5">Virtual remodel and structural edits</h5>
          <p className="fs-5">
            Our virtual remodel service is great for any home or office. We’ll
            show what a remodel could look like by changing cabinets,
            countertops, flooring, walls, and more.
          </p>
          <div className="my-5">
            <h2>$125</h2>
            <p className="fs-4">Per Photo</p>
          </div>
          <ServiceAddtoCartButton service="remodel" price="125" />
        </div>
        <div className="col-md text-center">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png"
            alt="restyle"
            className="w-100"
          />
        </div>
      </section>
      {/* benefit of restyle */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="m-auto col-md-8 text-center">
          <h2>Virtual Reality House Renovation</h2>
          <h5 className="my-5">
            Some homes could use an update but trying to envision a remodel is
            not an easy task. We’ll help you show home shoppers the true
            potential of their next home. We can add and remove flooring, walls,
            cabinets, countertops and more. What does your property need?
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
      {/* photo gallery */}
      <section className="row col-md-8 mx-auto">
        <h3 className="text-left m-3">Thoughtful designs on every project</h3>

        <RemodelPhotos />
      </section>
      {/* process */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/10/dated-kitchen-remodel.jpg"
              alt="send"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>1. Send us your photos</h3>
            <p className="fs-5">
              Decide how many and which photos you’d like edited. If you need
              help deciding – email us your photos and we’ll help you pick. We
              recommend trying to show at least one photo of each main room.
            </p>
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>2. Tell us about them</h3>
            <p className="fs-5">
              Tell us what you would like to see in your virtual remodel. When
              submitting your photos you’ll have the opportunity to specify
              anything you’d like to see. You can include specific examples or
              brands of finishes such as flooring, paint colors, fixtures, and
              more. Or, if you don’t have specifics in mind you can leave it up
              to our design team. Once the remodel is complete we can also add
              furniture with our virtual staging service.
            </p>
          </div>
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/10/kitchen-remodel.jpg"
              alt="needs"
            />
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/10/sold-house.jpg"
              alt="needs"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>3. Start Impressing</h3>
            <p className="fs-5">
              We’ll notify you once your photos are complete. For most projects
              this is usually within 1 business day of submitting your project.
              Review your completed virtual restyle and let us know what you
              think. You can start using your photos in all of your marketing
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
            <ServiceAddtoCartButton service="remodel" price="125" />
          </div>
        </div>
      </section>
      {/* questions*/}
      <section className="row col-md-8 mx-auto my-5 py-5 text-center">
        <div className="col-md-6">
          <h2>Still have questions?</h2>
        </div>
        <div className="col-md-6">
          <RemodelQuestions />
        </div>
      </section>
    </div>
  );
}

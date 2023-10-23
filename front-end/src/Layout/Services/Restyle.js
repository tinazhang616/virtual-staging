import React from "react";
import RestylePhotos from "./component/RestylePhotos";
import RestyleQuestions from "./component/RestyleQuestions";
import ServiceAddtoCartButton from "./component/ServiceAddtoCartButton";
function Restyle() {
  return (
    <div className="my-5 py-5">
      <section className="row col-md-8 mx-auto">
        <div className="col-md me-3">
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <h1>Restyle</h1>
          <h5 className="my-5">Virtual furniture removal & staging</h5>
          <p className="fs-5">
            We’ll remove existing furniture and replace it with professionally
            decorated furniture. It’s great for cluttered, dated, or uninspiring
            homes that could use a makeover.
          </p>
          <div className="my-5">
            <h2>$99</h2>
            <p className="fs-4">Per Photo</p>
          </div>
          <ServiceAddtoCartButton service="Restyle" price="99" />
        </div>
        <div className="col-md text-center">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/restyle-3.png"
            alt="restyle"
            className="w-100"
          />
        </div>
      </section>
      {/* benefit of restyle */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="m-auto col-md-8 text-center">
          <h2>Virtual Decluttering</h2>
          <h5 className="my-5">
            Can’t get vacant photos? We’ll remove furniture, boxes, or debris in
            your photos so you can market a more inspiring property.
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
        <RestylePhotos />
      </section>
      {/* process */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <h2 className="m-auto my-5 text-center">
          Get more with Virtual Staging Solutions
        </h2>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/0042-2.jpg"
              alt="send"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>1. Send us your photos</h3>
            <p className="fs-5">
              Decide which photos you’d like edited. It’s best to show at least
              1-2 photos of each main room. Standard photos taken by you or your
              photographer are all that we need. Our Restyle service is for
              homes that aren’t vacant or messy photos.
            </p>
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>2. Tell us about them</h3>
            <p className="fs-5">
              Tell us about your photos and what you’d like to see. We’ll
              usually remove all existing furniture but let us know if you’d
              like to leave anything in the photo.
            </p>
          </div>
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/virtual-declutter-info.jpg"
              alt="needs"
            />
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/0042.jpg"
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
            <ServiceAddtoCartButton service="Restyle" price="99" />
          </div>
        </div>
      </section>
      {/* questions*/}
      <section className="row col-md-8 mx-auto my-5 py-5 text-center">
        <div className="col-md-6">
          <h2>Still have questions?</h2>
        </div>
        <div className="col-md-6">
          <RestyleQuestions />
        </div>
      </section>
    </div>
  );
}
export default Restyle;

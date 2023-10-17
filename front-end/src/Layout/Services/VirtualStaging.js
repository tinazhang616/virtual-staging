import React from "react";
import BasicButton from "./component/BasicButton";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
function VirtualStaging({ shoppingCart }) {
  return (
    <div className="container my-5 py-5">
      <section className="row">
        <div className="col-md me-3">
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <span className="fa fa-star me-1 text-warning"></span>
          <h1>Virtual Staging</h1>
          <h5 className="my-5">
            Digitally add furniture that inspires home shoppers
          </h5>
          <p className="fs-5">
            Physically staging a home can get expensive, fast. Our virtual
            staging service gives homes a leg up in the market, without anyone
            ever having to open the front door.
          </p>
          <div className="my-5">
            <h2>$75</h2>
            <p className="fs-4">Per Photo</p>
          </div>

          <button className="btn btn-outline-primary col-5 mb-3" to="/">
            Choose Options
          </button>
        </div>
        <div className="col-md">
          <ReactCompareSlider
            itemOne={
              <ReactCompareSliderImage
                src="https://virtualstagingsolutions.com/wp-content/uploads/2018/05/virtual-staging-service-photo-example.jpg"
                // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Image one"
                className="rounded"
              />
            }
            itemTwo={
              <ReactCompareSliderImage
                src="https://virtualstagingsolutions.com/wp-content/uploads/2018/05/modern-livingroom-virtual-staging-service-example.jpg"
                // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                alt="Image two"
                className="rounded"
              />
            }
          />
        </div>
      </section>
      <section className="row m-auto my-5 py-5">
        <div className="m-auto col-md-6 text-center">
          <h2>All of the benefits of staging, without the hassle.</h2>
          <h5 className="my-5">
            With 90% of home buyers searching online for their next home,
            there’s never been a better time for virtual staging.
          </h5>
        </div>
        <div className="d-md-flex justify-content-between flex-wrap">
          <div className="col-md-3 text-center">
            <div
              className="card bg-primary"
              style={{ height: "18rem", width: "23rem" }}
            >
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
          <div className="col-md-3 text-center">
            <div className="card" style={{ height: "18rem", width: "23rem" }}>
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
          <div className="col-md-3 text-center">
            <div className="card" style={{ height: "18rem", width: "23rem" }}>
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
        <div className="d-md-flex justify-content-between flex-wrap my-5">
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-twitter fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Bring a vision to life</h4>
                <p className="fs-5">
                  Staging a home brings the property to life. In fact,{" "}
                  <strong>83% of seller's agents</strong> state that staging a
                  home helps buyers see a property as a future home.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-line-chart fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">
                  Increase the value of offers
                </h4>
                <p className="fs-5">
                  A staged home is a much hotter commodity on the market.
                  Staging a home can actually
                  <strong> increase the value of offers by 6-10%.</strong>{" "}
                  That's 30-50k on a 500K property!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-level-down fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Decrease time on the market</h4>
                <p className="fs-5">
                  A staged home leaves the market much faster than an empty
                  property. In 2021,
                  <strong> 31% of seller's agents reported</strong> that staging
                  greatly decreased the time a home spent in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-flex justify-content-between flex-wrap my-5">
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-twitter fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Bring a vision to life</h4>
                <p className="fs-5">
                  Staging a home brings the property to life. In fact,{" "}
                  <strong>83% of seller's agents</strong> state that staging a
                  home helps buyers see a property as a future home.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-line-chart fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">
                  Increase the value of offers
                </h4>
                <p className="fs-5">
                  A staged home is a much hotter commodity on the market.
                  Staging a home can actually
                  <strong> increase the value of offers by 6-10%.</strong>{" "}
                  That's 30-50k on a 500K property!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-left">
            <div style={{ height: "18rem", width: "23rem" }}>
              <div className="card-body">
                <span className="fa fa-level-down fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Decrease time on the market</h4>
                <p className="fs-5">
                  A staged home leaves the market much faster than an empty
                  property. In 2021,
                  <strong> 31% of seller's agents reported</strong> that staging
                  greatly decreased the time a home spent in the market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2>Get more with Virtual Staging Solutions</h2>
      </section>
      <section className="row text-center col-6">
        <h2>How it works</h2>
        <ol className="">
          <li>Purchase credits</li>
          <li>Submit property photos</li>
          <li>Give us some details</li>
          <li>Choose your furniture/style</li>
          <li>Ready in 1-2 days</li>
        </ol>
      </section>
      <section>
        <h2>Save 10x Over Physical Staging</h2>
        <p>All purchases are backed by our 100% happiness guarantee</p>
        <div>
          <div>
            <BasicButton shoppingCart={shoppingCart} />
          </div>
          <div>Plus</div>
        </div>
      </section>
      <section>
        <h2>
          Need more than just virtual staging? Check out our other services.
        </h2>
      </section>
      <section>
        <h2>Why choose Virtual Staging Solutions</h2>
      </section>
    </div>
  );
}
export default VirtualStaging;

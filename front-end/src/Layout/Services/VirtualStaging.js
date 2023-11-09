import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import BasicService from "./component/BasicService";
import PlusService from "./component/PlusService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function VirtualStaging() {
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

          <a className="btn btn-outline-primary col-5 mb-3" href="#service">
            Choose Options
          </a>
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
      {/* benefit of staging */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="m-auto col-md-8 text-center">
          <h2>All of the benefits of staging, without the hassle.</h2>
          <h5 className="my-5">
            With 90% of home buyers searching online for their next home,
            there’s never been a better time for virtual staging.
          </h5>
        </div>
        <div className="d-md-flex justify-content-between flex-wrap">
          <div className="col-md-4 text-center">
            <div className="card">
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
        <div className="d-md-flex justify-content-between flex-wrap my-5">
          <div className="col-md-4 text-left">
            <div>
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
          <div className="col-md-4 text-left">
            <div>
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
          <div className="col-md-4 text-left">
            <div>
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
        <div className="d-md-flex justify-content-between flex-wrap mb-5">
          <div className="col-md-4 text-left">
            <div>
              <div className="card-body">
                <span className="fa fa-arrows fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Make a space feel bigger</h4>
                <p className="fs-5">
                  It's hard for a prospective buyer to gauge the size of a space
                  when looking at an empty room. Staging a home actually makes
                  the space feel bigger by showing that a queen bed can fit in
                  that spare bedroom.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-left">
            <div>
              <div className="card-body">
                <span className="fa fa-money fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">
                  Spend less than physical staging
                </h4>
                <p className="fs-5">
                  The average cost for physically staging a 2,000 square foot
                  home is around $3,000 plus $1,400 per month for furniture
                  rental. With us, you'll spend only a small fraction of that
                  with a one-time fee.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 text-left">
            <div>
              <div className="card-body">
                <span className="fa fa-star fa-2x text-primary m-3"></span>
                <h4 className="card-title my-2">Win listing contracts</h4>
                <p className="fs-5">
                  Having a beautiful portfolio of past properties and updated
                  marketing materials helps you standout from other agents in
                  your areas. We help you win future listing contracts by making
                  sure you rock your current listings!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row col-md-8 mx-auto mb-5 py-5">
        <h2 className="m-auto my-5 text-center">
          Get more with Virtual Staging Solutions
        </h2>
        <div className="row my-5 py-3">
          <div className="col-lg">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2018/05/best-virtual-staging-service-before-example.jpg"
                  // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                  // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                  alt="Image one"
                  className="rounded"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2018/05/best-virtual-staging-service-example.jpg"
                  // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                  // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                  alt="Image two"
                  className="rounded"
                />
              }
            />
          </div>
          <div className="col-lg my-3 ml-5">
            <h3>Expert designers you can trust</h3>
            <p className="fs-5">
              We know that high-quality results means hiring high-quality team
              members. In order to have a staged home that looks professionally
              designed, you need professional designers. We hire the best
              interior designers in the industry to make sure that you have
              photos that get your buyer’s attention.
            </p>
          </div>
        </div>
        <div className="row flex-column-reverse flex-lg-row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>Custom designs for each property</h3>
            <p className="fs-5">
              Many of our clients don’t mind handing all of the work over to our
              team. But we have an option for others that are itching to pick
              their own furniture. We have a furniture library that allows you
              to hand pick every piece of furniture you want to see staged in
              your photos. Or pick from general styles and room sets.
            </p>
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
        </div>
        <div className="row my-5 py-3">
          <div className="col-lg">
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03_77_Wood_Road_703_East_Snowmass_Village_81615003-2.jpg"
                  // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                  // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                  alt="Image one"
                  className="rounded"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03_77_Wood_Road_703_East_Snowmass_Village_81615003.jpg"
                  // srcSet="image-url-300.jpg 300w, image-url-768.jpg 768w, image-url-1280.jpg 1280w"
                  // sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"
                  alt="Image two"
                  className="rounded"
                />
              }
            />
          </div>
          <div className="col-lg my-3 ml-5">
            <h3>We do all of the research</h3>
            <p className="fs-5">
              We know the market is always changing. Whether it’s mid-century,
              minimalist, modern, or shabby chic, we are on it. We keep a close
              eye on the market so we always know what is trending. We keep
              staged homes with the times as they hit the the market
            </p>
          </div>
        </div>
      </section>
      {/* process */}
      <section className="row col-md-8 mx-auto">
        <h2 className="text-center">How it works</h2>
        <ol className="col-md-8 m-auto text-left my-5">
          <li className="fs-2">
            Purchase credits
            <p className="fs-5">
              Choose a package that fits your needs and select the number of
              photos you want.
            </p>
          </li>
          <li className="fs-2">
            Submit property photos
            <p className="fs-5">
              Any photos you like will do. As long as you're happy, we're happy.
            </p>
          </li>
          <li className="fs-2">
            Give us some details
            <p className="fs-5">
              Tell us anything you want us to know about the property.
            </p>
          </li>
          <li className="fs-2">
            Choose your furniture/style
            <p className="fs-5">
              Don't want to choose? You can opt-out and our designers can handle
              everything!
            </p>
          </li>
          <li className="fs-2">
            Ready in 1-2 days
            <p className="fs-5">
              Get notified as soon as your project is ready and easily download
              your photos.
            </p>
          </li>
        </ol>
      </section>
      {/* price */}
      <section className="py-5" id="service">
        <div className="row col-md-8 mx-auto text-center">
          <h2>Save 10x Over Physical Staging</h2>
          <p className="fs-5 mb-5 pb-3 ">
            All purchases are backed by our 100% happiness guarantee
          </p>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 my-2">
              <BasicService />
            </div>
            <div className="col-lg-4 my-2">
              <PlusService />
            </div>
          </div>
          <h2 className="my-3 pt-5">Bulk Discounts</h2>
          <p className="fs-5 mb-5 pb-3 col-md-8 mx-auto">
            Buy in bulk and save. You can use your photo credits individually,
            anytime, and on any project. Credits never expire.
          </p>
          <div className="row d-flex justify-content-around">
            <div class="card price col-md-3 my-2">
              <div className="card-body">
                <h5 className="card-title fs-1">10+ Photos</h5>
                <p className="card-text fs-2">Save 15%</p>
              </div>
            </div>
            <div className="card price col-md-3 my-2">
              <div className="card-body">
                <h5 className="card-title fs-1">25+ Photos</h5>
                <p className="card-text fs-2">Save 20%</p>
              </div>
            </div>
            <div className="card price col-md-3 my-2">
              <div className="card-body">
                <h5 className="card-title fs-1">50+ Photos</h5>
                <p className="card-text fs-2">Save 25%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* more service */}
      <section className="row col-md-8 mx-auto my-5 py-5 text-center">
        <h2 className="col-md-10 m-auto">
          Need more than just virtual staging? Check out our other services.
        </h2>
        <div className="my-5 d-md-flex justify-content-around">
          <div
            className="col-md-3"
            role="button"
            onClick={() => history.push("/services/restyle")}
          >
            <img
              src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/restyle-1.png"
              className="card-img-top"
              alt="restyle"
            />
            <div className="card-body text-left ms-3 my-3">
              <h4 className="card-title">Restyle</h4>
              <h4 className="card-title">Remove furniture &gt;</h4>
            </div>
          </div>
          <div
            className="col-md-3"
            role="button"
            onClick={() => history.push("/services/remodel")}
          >
            <img
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png"
              className="card-img-top"
              alt="remodel"
            />
            <div className="card-body text-left ms-3 my-3">
              <h4 className="card-title">Remodel</h4>
              <h4 className="card-title">Structural edits &gt;</h4>
            </div>
          </div>
          <div
            className="col-md-3"
            role="button"
            onClick={() => history.push("/services/envision")}
          >
            <img
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision.png"
              className="card-img-top"
              alt="envision"
            />
            <div className="card-body text-left ms-3 my-3">
              <h4 className="card-title">Envision</h4>
              <h4 className="card-title">Virtual construction &gt;</h4>
            </div>
          </div>
          <div
            className="col-md-3"
            role="button"
            onClick={() => history.push("/services/3d-floor-plan")}
          >
            <img
              src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/3Dfloorplan-1024x1024.jpg"
              className="card-img-top"
              alt="3d floor plan"
            />
            <div className="card-body text-left ms-3 my-3">
              <h4 className="card-title">3D Floor Plan &gt;</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5" id="service">
        <div
          div
          className="row col-md-8 mx-auto text-center d-flex justify-content-around my-5"
        >
          <h2 className="mb-5">Why choose Virtual Staging Solutions</h2>
          <div className="col-md-4">
            <span className="fa fa-diamond fa-3x text-primary m-3"></span>
            <h3>Personalized team</h3>
          </div>
          <div className="col-md-4">
            <span className="fa fa-handshake-o fa-3x text-primary m-3"></span>
            <h3>Money back guarantee</h3>
          </div>
          <div className="col-md-4">
            <span className="fa fa-refresh fa-3x text-primary m-3"></span>
            <h3>Free revisions</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
export default VirtualStaging;

import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Affiliate() {
  return (
    <div className="my-5 py-5">
      <section className="row col-md-8 mx-auto">
        <div className="col-md me-3 my-auto">
          <h2>Spread the word.</h2>
          <h2> Earn cash.</h2>
          <p className="fs-5">
            Introduce VSS to your audience, customers, or friends and earn a 25%
            life-time commission.
          </p>
          <button className="btn btn-primary w-100" onClick={() => {}}>
            <span className="fa fa-shopping-cart me-3"></span>
            Join Affiliate Program &gt;
          </button>
        </div>
        <div className="col-md text-center">
          <img
            src="https://virtualstagingsolutions.com/wp-content/uploads/2019/11/undraw_conversation_h12g-1024x637.png"
            alt="affiliate"
            className="w-100"
          />
        </div>
      </section>
      {/* benefit of restyle */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <div className="d-md-flex justify-content-between flex-wrap">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center">
                <div>
                  <span className="fa fa-user-plus fa-2x text-dark m-3"></span>
                </div>
                <div className="text-left mt-3">
                  <h3 className="card-title">Sign Up</h3>
                  <p className="fs-5">
                    Anyone can join. Just answer a few quick questions and
                    you'll be on your way.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center">
                <div>
                  <span className="fa fa-commenting-o fa-2x text-dark m-3"></span>
                </div>
                <div className="text-left mt-3">
                  <h3 className="card-title">Promote & Share</h3>
                  <p className="fs-5">
                    All you need to do is share your custom link. You can share
                    it via email, on your website & more.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body d-flex justify-content-center">
                <div>
                  <span className="fa fa-money fa-2x text-dark m-3"></span>
                </div>
                <div className="text-left mt-3">
                  <h3 className="card-title">Earn!</h3>
                  <p className="fs-5">
                    We send you a 25% commission for every order placed as a
                    result of your affiliate link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* mission */}
      <section className="card row bg-primary">
        <div className="text-center col-md-5 my-5 m-auto text-center">
          <h2 className="m-5">Join Our Mission</h2>
          <p className="fs-5">
            We want to help real estate professionals all over the world sell
            homes faster and easier. We do that by helping home buyers make more
            informed decisions about one of the largest purchases of their life.
          </p>
          <p className="fs-5">
            Join us on this mission and make some cash while you’re at it!
          </p>
        </div>
      </section>
      {/* process */}
      <section className="row col-md-8 mx-auto my-5 py-5">
        <h2 className="m-auto my-5 text-center">Here's How It Works</h2>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-12-at-1.15.21-PM-1024x733.png"
              alt="send"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>Sign Up</h3>
            <p className="fs-5">
              When you sign up you’ll receive access to our affiliate area where
              you’ll get a special link that keeps track of visits and
              purchases.
            </p>
            <p className="fs-5">
              You’ll be able track your commission and see how many people click
              on your link and how many make a purchase.
            </p>
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>Promote</h3>
            <p className="fs-5">
              Our affiliates are photographers, home stagers, marketing
              agencies, virtual tour companies, real estate brokers, agents, and
              entrepreneurs.
            </p>
            <p className="fs-5">
              The best way to promote virtual staging is to an existing audience
              or client base. Many create a page or link on their website, share
              on social networks, email their clients, and offer virtual staging
              as an additional service.
            </p>
          </div>
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2019/11/undraw_social_girl_562b-1024x880.png"
              alt="needs"
            />
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2019/11/undraw_wallet_aym5-1024x666.png"
              alt="needs"
            />
          </div>
          <div className="col-md my-3 ml-5">
            <h3>Earn</h3>
            <p className="fs-5">
              Each time someone signs up through your affiliate link their
              account will be linked to yours as the referrer. That means you’ll
              receive a commission for all of their orders, forever. They no
              longer have to click on your link after each purchase and{" "}
              <strong>
                you’ll receive a 25% commission on everything they buy –
                forever.
              </strong>{" "}
              This is unheard of in our industry.
            </p>
            <p className="fs-5">
              We’ll pay-out your commission every 30 days via check, direct
              deposit, or PayPal.
            </p>
          </div>
        </div>
        <div className="row my-5 py-3">
          <div className="col-md my-3 me-5">
            <h3>We Do The Rest</h3>
            <p className="fs-5">
              Running a virtual staging company is complex. It involves
              everything from design to advanced CGI software, order intake and
              management, handling revisions, delivering photos, customer
              support, billing, and more.
            </p>
            <p className="fs-5">
              The good news is, we do all of that for you. We invented virtual
              staging and are the industry leader — so your customers are in the
              best hands.
            </p>
            <p className="fs-5">
              We’ll work directly with the clients you send to us and you can
              simply collect your earnings.
            </p>
          </div>
          <div className="col-md text-sm-center">
            <img
              className="rounded w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2019/11/undraw_work_chat_erdt-1024x756.png"
              alt="needs"
            />
          </div>
        </div>
      </section>

      {/* questions*/}
      <section className="row col-md-8 mx-auto my-5 py-5 text-center">
        <h3>
          Still have questions? <Link to="/contact-us"> Get in touch</Link>
        </h3>
      </section>
      {/* sign up*/}
      <section className="row col-md-8 mx-auto">
        <div className="text-center">
          <h2>Ready to start?</h2>
          <button
            className="btn col-md-2 m-5 btn-primary w-100"
            style={{ textAlign: "center" }}
            onClick={() => {}}
          >
            Apply Now &gt;
          </button>
          <div className="row-col-8 d-flex justify-content-center"></div>
        </div>
      </section>
    </div>
  );
}

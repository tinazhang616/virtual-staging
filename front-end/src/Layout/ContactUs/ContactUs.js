import React from "react";
import ContactForm from "./component/ContactForm";
export default function ContactUs() {
  return (
    <div className="my-5 py-5">
      <div className="row col-md-8 mx-auto">
        <div className="col-md-8 mx-auto text-center my-5">
          <h1>How can we help?</h1>
          <p className="fs-4">
            Don’t hesitate to reach out with questions, comments, or just to say
            hello!
          </p>
        </div>
        <div className="d-flex flex-wrap justify-content-center m-auto">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-3 fs-5 fw-bolder">
            <div className="m-5">
              <div>
                <span className="fa fa-envelope-o me-3"></span>Email us:
              </div>
              <a
                href="mailto:tinazhang616@gmail.com"
                className="link-underline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                tinazhang616@gmail.com
              </a>
            </div>
            <div className="m-5">
              <div>
                <span className="fa fa-phone me-3"></span>Call us:
              </div>
              <a href="tel:713-992-0916" className="link-underline-light">
                626-217-9631
              </a>
            </div>
            <div className="m-5">
              <div>
                <span className="fa fa-comment-o me-3"></span>Text us:
              </div>
              <a className="link-underline-light" href="sms:(1)(6262179631)">
                626-217-9631
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

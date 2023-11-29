import React from "react";
import Explore from "./Explore";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function MainPage() {
  return (
    <div className="container-lg text-center">
      {/* section 1 */}
      <div className="row my-5">
        <div className="col-lg-8 m-auto">
          <h1 className="mt-5 pt-5">
            Digitally furnish, build, or remodel any home.
          </h1>
          <p className="fs-4 m-4">
            Visual marketing and creative solutions that help you inspire
            buyers, sell homes faster, and get top dollar for your sales.
          </p>
        </div>
        <div>
          <Explore />
        </div>
      </div>
      <img
        // decoding="async"
        // fetchpriority="high"
        // width="1122"
        // height="439"
        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero.png"
        className="w-100 attachment-full size-full wp-image-1305910 entered lazyloaded"
        alt="modern living room before and after virtual staging"
        data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero.png 1122w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-300x117.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-1024x401.png 1024w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-768x300.png 768w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-416x163.png 416w"
        data-lazy-sizes="(max-width: 1122px) 100vw, 1122px"
        data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero.png"
        data-ll-status="loaded"
        sizes="(max-width: 1122px) 100vw, 1122px"
        srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero.png 1122w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-300x117.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-1024x401.png 1024w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-768x300.png 768w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-hero-416x163.png 416w"
      ></img>
      {/* secrion 2 */}
      <div className="row m-md-5 pt-5">
        <div className="col-lg-8 m-auto">
          <h2>Trusted by industry experts</h2>
          <p className="fs-4 my-4">
            The world’s best virtual staging designs are created here. With over
            10 years of experience and 100,000+ properties virtually staged, you
            can trust you’re in good hands.
          </p>
          <img
            decoding="async"
            width="741"
            height="267"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos.png"
            className="w-100"
            alt="real estate company logos that have used virtual staging solutions including coldwell banker, fannie mae, sothebys, remax, and more"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos.png 741w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos-300x108.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos-416x150.png 416w"
            data-lazy-sizes="(max-width: 741px) 100vw, 741px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos.png"
            data-ll-status="loaded"
            sizes="(max-width: 741px) 100vw, 741px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos.png 741w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos-300x108.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/company_logos-416x150.png 416w"
          />
        </div>
      </div>
      {/* section 3 */}
      <div className="row">
        <div className="col-md-8 m-auto">
          <h2>See what Virtual Staging Solutions can do for you</h2>
          <p className="fs-4 mt-4">
            From virtual home staging to remodeling and new construction
            visualizations, we provide quality results you can rely on.
          </p>
        </div>
        <div className="row d-flex justify-content-around text-center my-5">
          <div className="col-md-5">
            <div className="my-3 mb-5">
              <span className="fa fa-font-awesome fa-3x text-primary"></span>
              <div className="fs-3 fw-bold mt-2">Inspire buyers</div>
              <div className="fs-5 mt-2">
                You no longer need to spend time convincing your potential
                buyers about the potential of a home, now you can show them.
              </div>
            </div>
            <div>
              <span className="fa fa-line-chart fa-3x text-primary"></span>
              <div className="fs-3 fw-bold mt-2">Get top dollar</div>
              <div className="fs-5 mt-2">
                Multiple offers means competition amongst your bidders. Get
                ready to sell above asking price as more people fall in love
                with your listing.
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="my-3 mb-5">
              <span className="fa fa-handshake-o fa-3x text-primary"></span>
              <div className="fs-3 fw-bold mt-2">Standout in your industry</div>
              <div className="fs-5 mt-2">
                Our marketing materials will help you standout from other
                agents. All of our photos are professionally designed and are of
                the highest quality.
              </div>
            </div>
            <div>
              <span className="fa fa-star-o fa-3x text-primary"></span>
              <div className="fs-3 fw-bold mt-2">Get top dollar</div>
              <div className="fs-5 mt-2">
                Multiple offers means competition amongst your bidders. Get
                ready to sell above asking price as more people fall in love
                with your listing.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 4 Virtual staging */}
      <div className="row d-flex justify-content-around my-5 py-5">
        <div className="col-lg-5 text-center">
          <img
            decoding="async"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png"
            className="w-lg-100"
            alt="modern living room with fireplace before and after virtual staging"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-100x100.png 100w"
            data-lazy-sizes="(max-width: 500px) 100vw, 500px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png"
            data-ll-status="loaded"
            sizes="(max-width: 500px) 100vw, 500px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging-100x100.png 100w"
          />
        </div>
        <div className="col-lg-5 text-lg-start my-auto">
          <h2>Virtual Staging</h2>
          <div className="fs-5 my-5">
            Virtual staging is the easiest way to make real estate stand out
            from the competition. Our professional designers help inspire buyers
            by digitally adding furniture to any photo.
          </div>
          <Link
            to="/services/virtual-staging"
            className="btn btn-outline-primary"
          >
            Explore Virtual Staging &gt;
          </Link>
        </div>
      </div>
      {/* section 5 restyle */}
      <div className="row flex-column-reverse flex-lg-row d-flex justify-content-around my-5 py-5">
        <div className="col-lg-5 text-lg-start my-auto ">
          <h2>Restyle</h2>
          <h5>Remove furniture</h5>
          <div className="fs-5 my-5">
            Our Restyle add-on will remove any existing furniture in your real
            estate photos. It’s great for cluttered, dated, or under-optimized
            homes that could use a makeover.
          </div>
          <Link to="/services/restyle" className="btn btn-outline-primary">
            Explore Restyle &gt;
          </Link>
        </div>
        <div className="col-lg-5 text-center">
          <img
            decoding="async"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1.png"
            className="w-lg-100 attachment-full size-full wp-image-1305914 entered lazyloaded"
            alt="transitional living room furniture removed and virtually staged"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-100x100.png 100w"
            data-lazy-sizes="(max-width: 500px) 100vw, 500px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1.png"
            data-ll-status="loaded"
            sizes="(max-width: 500px) 100vw, 500px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/restyle-1-100x100.png 100w"
          />
        </div>
      </div>
      {/* section 6 remodel */}
      <div className="row row d-flex justify-content-around my-5 py-5">
        <div className="col-lg-5 text-center ">
          <img
            decoding="async"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png"
            className="w-lg-100 attachment-full size-full wp-image-1305915 entered lazyloaded"
            alt="kitchen remodeled and virtually staged"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-100x100.png 100w"
            data-lazy-sizes="(max-width: 500px) 100vw, 500px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png"
            data-ll-status="loaded"
            sizes="(max-width: 500px) 100vw, 500px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2-100x100.png 100w"
          />
        </div>
        <div className="col-lg-5 text-lg-start my-auto">
          <h2>Remodel</h2>
          <h5>Structural edits</h5>
          <div className="fs-5 my-5">
            A photo is worth a thousand words. Instead of making a buyer imagine
            a remodel, show them. We’ll change cabinets, countertops, flooring,
            add or remove walls, and more.
          </div>
          <Link to="/services/remodel" className="btn btn-outline-primary">
            Explore Remodel &gt;
          </Link>
        </div>
      </div>
      {/* section 7 envision */}
      <div className="row flex-column-reverse flex-lg-row d-flex justify-content-around my-5 py-5">
        <div className="col-lg-5 text-lg-start my-auto">
          <h2>Envision</h2>
          <h5>Virtual construction</h5>
          <p className="fs-5 my-5">
            Great for pre-selling new construction or real estate under
            renovation. We’ll create realistic photos of any project and match
            the finishes you provide to us. We’ll match wall color, flooring,
            cabinets, countertops, fixtures, and more.
          </p>
          <Link to="/services/envision" className="btn btn-outline-primary">
            Explore Envision &gt;
          </Link>
        </div>
        <div className="col-lg-5 text-center">
          <img
            decoding="async"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision.png"
            className="attachment-full size-full wp-image-1305916 entered lazyloaded"
            alt="floor plan turned into a rendering of a living room"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-100x100.png 100w"
            data-lazy-sizes="(max-width: 500px) 100vw, 500px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision.png"
            data-ll-status="loaded"
            sizes="(max-width: 500px) 100vw, 500px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision.png 500w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-300x300.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-150x150.png 150w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-324x324.png 324w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-416x416.png 416w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/envision-100x100.png 100w"
          />
        </div>
      </div>
      {/* section 8 working process */}

      <div className="row">
        <h2 className="col-lg-8 m-auto my-lg-5">
          Working with Virtual Staging Solutions couldn't be easier.
        </h2>
        <div className="row">
          <div className="col-md">
            <div>
              <span
                className="fa fa-picture-o fa-5x text-primary m-3"
                aria-hidden="true"
              ></span>
              <h3>Send us your photos</h3>
              <p className="fs-4 m-4">
                We can start from anywhere. Send us your photos vacant or
                occupied, floor plans, virtual tours, or any other materials you
                have.
              </p>
            </div>
          </div>
          <div className="col-1 align-self-center visibility">
            <span
              className="fa fa-arrow-circle-right fa-4x"
              aria-hidden="true"
            ></span>
          </div>
          <div className="col-md">
            <div className="">
              <span
                className="fa fa-pencil fa-5x text-warning m-3"
                aria-hidden="true"
              ></span>
              <h3>Tell us about them</h3>
              <p className="fs-4 m-4">
                Tell us about your project and any special requests. Even select
                furniture if you'd like.
              </p>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="col-1 align-self-center visibility">
            <span
              className="fa fa-arrow-circle-right fa-4x"
              aria-hidden="true"
            ></span>
          </div>
          <div className="col-md">
            <div className="">
              <span
                className="fa fa-smile-o fa-5x text-info m-3"
                aria-hidden="true"
              ></span>
              <h3>Share and inspire</h3>
              <p className="fs-4 m-4">
                Share your photos to inspire buyers to act. We understand a
                property sale is a big decision so we'll help you instill
                confidence and get results.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section 9 explore all services */}
      <div className="row m-0 my-5 d-flex justify-content-between bg-service rounded">
        <div className="col-lg-5 m-5 px-lg-5 text-white text-lg-start">
          <h3 className="text-start me-5">
            Get the industry's best marketing materials from the inventors of
            virtual staging.
          </h3>
          <p className="fs-5 text-secondary text-start text-wrap ">
            Every virtual enhancement package includes:
          </p>
          <ul className="list-group-flush text-start">
            <li className="fs-5">
              <span class="fa fa-check text-success" aria-hidden="true"></span>
              Free Revisions
            </li>
            <li className="fs-5">
              <span class="fa fa-check text-success" aria-hidden="true"></span>
              Quality Results
            </li>
            <li className="fs-5">
              <span class="fa fa-check text-success" aria-hidden="true"></span>
              Personalized Team
            </li>
            <li className="fs-5">
              <span class="fa fa-check text-success" aria-hidden="true"></span>
              Happiness Guaranteed
            </li>
          </ul>
          <Link to="/services" className="btn btn-primary my-5">
            Explore Our Services &gt;
          </Link>
        </div>
        <div className="col-lg-5 m-0 p-0">
          <img
            decoding="async"
            src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png"
            className="w-100 attachment-full size-full wp-image-1305920 entered lazyloaded"
            alt="modern bedroom before and after virtual staging"
            data-lazy-srcset="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png 808w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-300x289.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-768x739.png 768w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-416x401.png 416w"
            data-lazy-sizes="(max-width: 808px) 100vw, 808px"
            data-lazy-src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png"
            data-ll-status="loaded"
            sizes="(max-width: 808px) 100vw, 808px"
            srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png 808w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-300x289.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-768x739.png 768w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-416x401.png 416w"
          />
          <noscript>
            <img
              decoding="async"
              width="808"
              height="778"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png"
              className="attachment-full size-full wp-image-1305920"
              alt="modern bedroom before and after virtual staging"
              srcSet="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1.png 808w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-300x289.png 300w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-768x739.png 768w, https://virtualstagingsolutions.com/wp-content/uploads/2021/09/ctaimage-virtualstaging-1-416x401.png 416w"
              sizes="(max-width: 808px) 100vw, 808px"
            />
          </noscript>
        </div>
      </div>
    </div>
  );
}
export default MainPage;

export default function RestylePhotos() {
  return (
    <div>
      <div className="container text-center">
        <div
          className="row row-cols-2 row-cols-lg-4 g-3"
          id="gallery"
          data-toggle="modal"
          data-target="#photoModal"
        >
          {/* row 1 */}
          <div className="col restyle">
            <img
              className=" rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Master-bedroom-existing-2.jpg"
              alt="1 slide"
              data-target="#carouselExample"
              data-slide-to="0"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Master-bedroom-existing.jpg"
              alt="2 slide"
              data-target="#carouselExample"
              data-slide-to="1"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className=" rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/7504-Collins-Ranch-Ter-17-2.jpg"
              alt="3 slide"
              data-target="#carouselExample"
              data-slide-to="2"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/7504-Collins-Ranch-Ter-17.jpg"
              alt="4 slide"
              data-target="#carouselExample"
              data-slide-to="3"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
          {/* row 2 */}
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/3845-N-Versailles-Ave-12-FULL-2.jpg"
              alt="5 slide"
              data-target="#carouselExample"
              data-slide-to="4"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/3845-N-Versailles-Ave-12-FULL.jpg"
              alt="6 slide"
              data-target="#carouselExample"
              data-slide-to="5"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/518-Black-Coral-Way-10-2.jpg"
              alt="7 slide"
              data-target="#carouselExample"
              data-slide-to="6"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/518-Black-Coral-Way-10.jpg"
              alt="8 slide"
              data-target="#carouselExample"
              data-slide-to="7"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
          {/* row 3 */}
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03Dining-Room-2.jpg"
              alt="9 slide"
              data-target="#carouselExample"
              data-slide-to="8"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03Dining-Room.jpg"
              alt="10 slide"
              data-target="#carouselExample"
              data-slide-to="9"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/virtual-staging-declutter-before-2.jpg"
              alt="11 slide"
              data-target="#carouselExample"
              data-slide-to="10"
            />
            <div className="middle">
              <div className="text">Before</div>
            </div>
          </div>
          <div className="col restyle">
            <img
              className="rounded image w-100"
              src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/virtual-staging-declutter-after-2.jpg"
              alt="12 slide"
              data-target="#carouselExample"
              data-slide-to="11"
            />
            <div className="middle">
              <div className="text">After</div>
            </div>
          </div>
        </div>
        {/* // modal */}
        <div
          className="modal fade"
          id="photoModal"
          tabIndex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen" role="document">
            <div className="modal-content">
              <div className="modal-header bg-primary">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body bg-primary">
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                  data-pause="hover"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carouselExample"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#carouselExample" data-slide-to="1"></li>
                    <li data-target="#carouselExample" data-slide-to="2"></li>
                    <li data-target="#carouselExample" data-slide-to="3"></li>
                    <li data-target="#carouselExample" data-slide-to="4"></li>
                    <li data-target="#carouselExample" data-slide-to="5"></li>
                    <li data-target="#carouselExample" data-slide-to="6"></li>
                    <li data-target="#carouselExample" data-slide-to="7"></li>
                    <li data-target="#carouselExample" data-slide-to="8"></li>
                    <li data-target="#carouselExample" data-slide-to="9"></li>
                    <li data-target="#carouselExample" data-slide-to="10"></li>
                    <li data-target="#carouselExample" data-slide-to="11"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-80 m-auto"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Master-bedroom-existing-2.jpg"
                        alt="1 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Master-bedroom-existing.jpg"
                        alt="2 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/7504-Collins-Ranch-Ter-17-2.jpg"
                        alt="3 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/7504-Collins-Ranch-Ter-17.jpg"
                        alt="4 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/3845-N-Versailles-Ave-12-FULL-2.jpg"
                        alt="5 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/3845-N-Versailles-Ave-12-FULL.jpg"
                        alt="6 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/518-Black-Coral-Way-10-2.jpg"
                        alt="7 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/518-Black-Coral-Way-10.jpg"
                        alt="8 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03Dining-Room-2.jpg"
                        alt="9 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/03Dining-Room.jpg"
                        alt="10 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/virtual-staging-declutter-before-2.jpg"
                        alt="11 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2018/04/virtual-staging-declutter-after-2.jpg"
                        alt="12 slide"
                      />
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExample"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExample"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Custom Styling Toggle. For demo purposes only. --> */}
        {/* <div className="switch-wrap">
        <label className="switch">
          <input type="checkbox" id="styleSwitch" onclick="switchStyle();" />
          <span className="slider round"></span>
        </label>
        <span className="switch-text">
          Toggle between <em>Bootstrap defaults</em> and <em>custom styling</em>
          .
        </span>
      </div> */}
      </div>
    </div>
  );
}

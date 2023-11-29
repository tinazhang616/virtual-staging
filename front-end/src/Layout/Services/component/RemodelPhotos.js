export default function RemodelPhotos() {
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
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Kitchen-existing-2.jpg"
                  alt="1 slide"
                  data-target="#carouselExample"
                  data-slide-to="0"
                />
              </div>
              <div className="middle">
                <div className="text">Before</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Kitchen-existing.jpg"
                  alt="2 slide"
                  data-target="#carouselExample"
                  data-slide-to="1"
                />
              </div>
              <div className="middle">
                <div className="text">After</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bar-existing-2.jpg"
                  alt="3 slide"
                  data-target="#carouselExample"
                  data-slide-to="2"
                />
              </div>
              <div className="middle">
                <div className="text">Before</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bar-existing.jpg"
                  alt="4 slide"
                  data-target="#carouselExample"
                  data-slide-to="3"
                />
              </div>
              <div className="middle">
                <div className="text">After</div>
              </div>
            </div>
          </div>
          {/* row 2 */}
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/IMG_6554.jpg"
                  alt="5 slide"
                  data-target="#carouselExample"
                  data-slide-to="4"
                />
              </div>
              <div className="middle">
                <div className="text">Before</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bathroom-2.jpg"
                  alt="6 slide"
                  data-target="#carouselExample"
                  data-slide-to="5"
                />
              </div>
              <div className="middle">
                <div className="text">After</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Fontaine-16018-IMG-32_1_1.jpg"
                  alt="7 slide"
                  data-target="#carouselExample"
                  data-slide-to="6"
                />
              </div>
              <div className="middle">
                <div className="text">Before</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="gallery">
              <div className="gallery-img">
                <img
                  className="image"
                  src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/01_Post-3.jpg"
                  alt="8 slide"
                  data-target="#carouselExample"
                  data-slide-to="7"
                />
              </div>
              <div className="middle">
                <div className="text">After</div>
              </div>
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
            <div className="modal-content modal-picture">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div
                  id="carouselExample"
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                  data-pause="hover"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Kitchen-existing-2.jpg"
                        alt="1 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Kitchen-existing.jpg"
                        alt="2 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bar-existing-2.jpg"
                        alt="3 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bar-existing.jpg"
                        alt="4 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/IMG_6554.jpg"
                        alt="5 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Bathroom-2.jpg"
                        alt="6 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/Fontaine-16018-IMG-32_1_1.jpg"
                        alt="7 slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/01_Post-3.jpg"
                        alt="8 slide"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

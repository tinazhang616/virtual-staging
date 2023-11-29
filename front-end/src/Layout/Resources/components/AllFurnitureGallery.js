import { useState } from "react";
import { furniturePhotos } from "./furnitureImages";
export default function AllFunitureGallery() {
  const [filter, setFilter] = useState("all");
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const filteredPhotos =
    filter === "all"
      ? furniturePhotos
      : furniturePhotos.filter((e) => e.category === filter);
  const photos = filteredPhotos.reduce((a, c) => {
    c.src.forEach((i) => a.push(i));
    return a;
  }, []);
  return (
    <div>
      {/* rooms filter */}
      <div className="my-5">
        <ul className="nav nav-underline justify-content-center fw-medium">
          <li className="nav-item mx-3 ">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("modern living")}
            >
              Modern Living
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("traditional living")}
            >
              Traditional Living
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("bedroom")}
            >
              Bedroom
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("kitchen dining")}
            >
              Kitchen & Dining
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("office")}
            >
              Office
            </button>
          </li>
          <li className="nav-item mx-3">
            <button
              className="nav-link text-black"
              onClick={() => handleFilterChange("outdoor")}
            >
              Outdoor
            </button>
          </li>
        </ul>
      </div>
      <div className="container text-center">
        <div
          className="row row-cols-2 row-cols-lg-3 g-4"
          id="gallery"
          data-toggle="modal"
          data-target="#photoModal"
        >
          {photos.map((e, index) => {
            const altText = `${index + 1} slide`;
            return (
              <div className="col">
                <div className="gallery">
                  <div className="gallery-img">
                    <img
                      className="image"
                      src={e}
                      alt={altText}
                      data-target="#carouselExample"
                      data-slide-to={index}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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
                    {photos.map((e, index) => {
                      const altText = `${index + 1} slide`;
                      return (
                        <div
                          className={
                            index === 0
                              ? "carousel-item active"
                              : "carousel-item"
                          }
                        >
                          <img src={e} alt={altText} />
                        </div>
                      );
                    })}
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

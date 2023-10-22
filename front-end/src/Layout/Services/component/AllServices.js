import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AllServices() {
  const history = useHistory();
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {/* virtual staging */}
          <div class="col">
            <div class="p-3">
              <img
                src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png"
                alt="virtual staging"
                className="w-100 service-img"
                onClick={() => history.push("/services/virtual-staging")}
              />
              <div className="d-flex justify-content-between m-3">
                <div className="text-left">
                  <h3>Virtual Staging</h3>
                  <div>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                  </div>
                  <p className="fs-5">Virtually add furniture</p>
                </div>
                <div>
                  <h3 className="m-0 p-0">$75</h3>
                  <p className="m-0 p-0">per photo</p>
                </div>
              </div>
            </div>
          </div>
          {/* restyle */}
          <div class="col">
            <div class="p-3">
              <img
                src="https://virtualstagingsolutions.com/wp-content/uploads/2023/01/restyle-2.png"
                alt="restyle"
                className="w-100 service-img"
                onClick={() => history.push("/services/restyle")}
              />
              <div className="d-flex justify-content-between m-3">
                <div className="text-left">
                  <h3>Restyle</h3>
                  <div>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                  </div>
                  <p className="fs-5">Virtual furniture removal & staging</p>
                </div>
                <div>
                  <h3 className="m-0 p-0">$99</h3>
                  <p className="m-0 p-0">per photo</p>
                </div>
              </div>
            </div>
          </div>
          {/* remodel */}
          <div class="col">
            <div class="p-3">
              <img
                src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/remodel-2.png"
                alt="remodel"
                className="w-100 service-img"
                onClick={() => history.push("/services/remodel")}
              />
              <div className="d-flex justify-content-between m-3">
                <div className="text-left">
                  <h3>Remodel</h3>
                  <div>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                  </div>
                  <p className="fs-5">Virtually renovate</p>
                </div>
                <div>
                  <h3 className="m-0 p-0">$125</h3>
                  <p className="m-0 p-0">per photo</p>
                </div>
              </div>
            </div>
          </div>
          {/* envision */}
          <div class="col">
            <div class="p-3">
              <img
                src="https://virtualstagingsolutions.com/wp-content/uploads/2021/09/virtualstaging.png"
                alt="envision"
                className="w-100 service-img"
                onClick={() => history.push("/services/envision")}
              />
              <div className="d-flex justify-content-between m-3">
                <div className="text-left">
                  <h3>Envision</h3>
                  <div>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                  </div>
                  <p className="fs-5">Virtual construction</p>
                </div>
                <div>
                  <h3 className="m-0 p-0">$399</h3>
                  <p className="m-0 p-0">per photo</p>
                </div>
              </div>
            </div>
          </div>
          {/* 3d floor plan */}
          <div class="col">
            <div class="p-3">
              <img
                src="https://virtualstagingsolutions.com/wp-content/uploads/2022/03/3Dfloorplan-1024x1024.jpg"
                alt="3d floor plan"
                className="w-100 service-img"
                onClick={() => history.push("/services/3d-floor-plan")}
              />
              <div className="d-flex justify-content-between m-3">
                <div className="text-left">
                  <h3>3D Floor Plan</h3>
                  <div>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                    <span className="fa fa-star me-1 text-warning"></span>
                  </div>
                  <p className="fs-5">High quality 3D floor plans</p>
                </div>
                <div>
                  <h3 className="m-0 p-0">$99</h3>
                  <p className="m-0 p-0">per level</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Explore() {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("click");
    history.push("/services");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn btn-outline-primary m-3"
    >
      Explore Our Service
      {/* <Link to="/services">Explore Our Service</Link> */}
    </button>
  );
}
export default Explore;

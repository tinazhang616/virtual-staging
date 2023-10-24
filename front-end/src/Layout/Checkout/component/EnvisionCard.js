import ServiceAddtoCartButton from "../../Services/component/ServiceAddtoCartButton";

export default function EnvisionCard() {
  return (
    <div className="rounded bg-white col-md-5 text-center py-4 my-5 m-1">
      <img
        src="https://virtualstagingsolutions.com/wp-content/uploads/2018/02/rm-100x100.png"
        className="w-25"
      />

      <h4>3D Floor Plan</h4>
      <p className="fs-5">$99.00</p>
      <p className="fs-5">High quality 3D floor plans</p>
      <ServiceAddtoCartButton service="3D Floor Plan" price="99" />
    </div>
  );
}

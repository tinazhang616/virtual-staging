import ServiceAddtoCartButton from "../../Services/component/ServiceAddtoCartButton";

export default function RestyleCard() {
  return (
    <div className="rounded bg-white col-md-5 text-center py-4 my-5 m-1">
      <img
        src="https://virtualstagingsolutions.com/wp-content/uploads/2018/02/rs-100x100.png"
        className="w-25"
      />

      <h4>Restyle</h4>
      <p className="fs-5">$99.00</p>
      <p className="fs-5">Remove existing furniture in your photos</p>
      <ServiceAddtoCartButton service="Restyle" price="99" />
    </div>
  );
}

import ServiceAddtoCartButton from "../../Services/component/ServiceAddtoCartButton";

export default function RemodelCard() {
  return (
    <div className="rounded bg-white col-md-5 text-center py-4 my-5 m-1">
      <img
        src="https://virtualstagingsolutions.com/wp-content/uploads/2018/02/rm-100x100.png"
        className="w-25"
      />

      <h4>Remodel</h4>
      <p className="fs-5">$125.00</p>
      <p className="fs-5">Change walls, cabinets and more</p>
      <ServiceAddtoCartButton service="Remodel" price="125" />
    </div>
  );
}

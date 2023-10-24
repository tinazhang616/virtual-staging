import RemodelCard from "./RemodelCard";
import RestyleCard from "./RestyleCard";

export default function SuperCharge() {
  return (
    <div className="card col-md-8 p-4">
      <h3>Supercharge your marketing...</h3>
      <p className="fs-5">
        For projects that could use more help. Priced per photo.
      </p>
      <div className="d-flex justify-content-around">
        <RemodelCard />
        <RestyleCard />
      </div>
    </div>
  );
}

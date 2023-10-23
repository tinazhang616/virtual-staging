import { useState } from "react";

export default function ReferralCode() {
  const [referralCode, setReferralCode] = useState("");
  const onChange = (e) => {};
  return (
    <div className="d-flex justify-content-start">
      <input
        type="text"
        className="form-control col-12 me-3"
        id="referral_code"
        name="referral_code"
        placeholder="Referral or discount code"
        onChange={onChange}
        value={referralCode}
        required
      />
      <button type="button" className="btn btn-primary col-4">
        Apply
      </button>
    </div>
  );
}

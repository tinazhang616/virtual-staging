import { useState } from "react";

export default function ReferralCode({
  handleReferralApply,
  handleReferralChange,
  referralCode,
}) {
  return (
    <div className="d-flex justify-content-start">
      <input
        type="text"
        className="form-control col-12 me-3"
        id="referral_code"
        name="referral_code"
        placeholder="Referral or discount code"
        onChange={handleReferralChange}
        value={referralCode}
        required
      />
      <button
        onClick={handleReferralApply}
        type="button"
        className="btn btn-primary col-4"
      >
        Apply
      </button>
    </div>
  );
}

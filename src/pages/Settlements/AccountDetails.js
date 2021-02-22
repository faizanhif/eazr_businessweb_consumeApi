import React, { useState } from "react";
import bankImg from "../../assets/images/hdfc-light.png";
const AccountDetails = () => {
  const [background, setBackground] = useState(0);

  return (
    <>
      <div
        className="separate-account d-flex"
        style={{ background: background === 0 && "#000" }}
        onClick={() => setBackground(0)}
      >
        <div className="acc-details d-flex ">
          <div className="bank-logo mr-3" style={{ background: "#ffffff" }}>
            <img src={bankImg} alt="" />
          </div>
          <div>
            <p>HDFC Bank ******6193</p>
            <span>IFSC : HDFC0000411</span>
          </div>
        </div>
        <div className="selected-icon">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
      <div
        className="separate-account d-flex"
        style={{ background: background === 1 && "#000" }}
        onClick={() => setBackground(1)}
      >
        <div className="acc-details d-flex ">
          <div className="bank-logo mr-3" style={{ background: "#ffffff" }}>
            <img src={bankImg} alt="" />
          </div>
          <div>
            <p>HDFC Bank ******6193</p>
            <span>IFSC : HDFC0000411</span>
          </div>
        </div>
        <div className="selected-icon">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
      <div
        className="separate-account d-flex"
        style={{ background: background === 2 && "#000" }}
        onClick={() => setBackground(2)}
      >
        <div className="acc-details d-flex ">
          <div className="bank-logo mr-3" style={{ background: "#ffffff" }}>
            <img src={bankImg} alt="" />
          </div>
          <div>
            <p>HDFC Bank ******6193</p>
            <span>IFSC : HDFC0000411</span>
          </div>
        </div>
        <div className="selected-icon">
          <i class="fas fa-check-circle"></i>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;

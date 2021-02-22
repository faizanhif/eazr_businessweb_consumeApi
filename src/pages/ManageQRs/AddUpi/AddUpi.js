import React from "react";
import { Component } from "react";
import QRNav from "../QRNav";

class AddUpi extends Component {
  render() {
    return (
      <div className="page-content transaction-page add-upi-page">
        <QRNav />
        <div className="mx-5 mt-5" style={{ color: "#ffffff" }}>
          Enter UPI ID
        </div>
        <div className="upi-input">
          <input type="text" placeholder="UPI ID Type here" />
        </div>
        <div className="mx-5 mt-5" style={{ color: "#ffffff" }}>
          Or Scan QR Code
        </div>
        {/* <div className="d-flex" style={{ background: "green" }}>
          <button className="qr-scan-btn d-flex flex-column text-center">
            <i class="fas fa-qrcode"></i>
            Scan QR
          </button>
          <button className="add-upi-btn">Add Upi</button>
        </div> */}
        <div className="d-flex justify-content-between px-5 pt-3 w-50">
          <div>
            <button className="qr-scan-btn d-flex flex-column ">
              <i class="fas fa-qrcode"></i>
              Scan QR
            </button>
          </div>
          <div className="add-upi-btn">
            <br />
            <button>Add UPI</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUpi;

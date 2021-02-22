import React from "react";
import { Component } from "react";
import QRNav from "./QRNav";
import logo from "../../assets/images/logo-light.png";
import "./manageQR.css";
import QRCode from "../../assets/images/qr-code.png";
import UPIList from "./UPIList";
import { Link } from "react-router-dom";
class ManageQRs extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
    this.editName = this.editName.bind(this);
  }

  editName() {
    this.setState({
      clicked: !this.state.clicked,
    });
    console.log(this.state.clicked);
  }
  render() {
    return (
      <div className="page-content manage-qr-page transaction-page  ">
        <QRNav />

        <div className="qr-info mt-5 d-flex">
          <div style={{ width: "40%" }}>
            <div className="qr-left-info">
              <div className="qr-left-info-logo">
                <img src={logo} alt="" />
                <h6>Scan & Pay</h6>
              </div>
              <div className="qr-code-div">
                <img src={QRCode} alt="" />
              </div>
              <div className="upi-id">9176642082@eazr</div>
              <div className="store-type">
                {" "}
                <h6>Medical Store</h6>{" "}
              </div>
            </div>
            <div className="share-qr-btn">
              <button>Share QR</button>
            </div>
          </div>
          <div className="right-qr-info">
            <div className="my-2" style={{ color: "#ffffff" }}>
              QR Display Name
            </div>
            <div className="select-qr-name">
              <div className="w-50">
                <select name="" id="">
                  <option>Medical Store</option>
                  <option value="">Himanshu Verma</option>
                </select>
              </div>
              <div className="download-qr-btn">
                <button>Download QR Code</button>
                <i class="fas fa-download"></i>
              </div>
            </div>
            <div className="edit-qr-details d-flex justify-content-between mt-5">
              <div className="qr-details">QR Code Details</div>
              <div className="edit-btn">
                <button onClick={this.editName}>Edit QR Details</button>
              </div>
            </div>
            {!this.state.clicked ? (
              <div className="display-name">
                <div>Display Name</div>

                <div style={{ color: "#ffffff" }}>Himanshu Verma</div>
              </div>
            ) : (
              <input type="text" autoFocus />
            )}
            <div className="edit-qr-details d-flex justify-content-between mt-5">
              <div className="qr-details">QR Code Details</div>
              <div className="edit-btn mb-3">
                <Link to="/add-upi">
                  <button>Add UPI</button>
                </Link>
              </div>
            </div>
            <UPIList upiId="abcmedicalstore@okdhfcbank" />
            <UPIList upiId="abcmedicalstore@okdhfcbank" />
          </div>
        </div>
      </div>
    );
  }
}

export default ManageQRs;

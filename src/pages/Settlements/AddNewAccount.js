import React from "react";
import { Component } from "react";
import Container from "reactstrap/lib/Container";
import SettlementNav from "../Settlements/SettlementNav";
import { Link } from "react-router-dom";
class AddNewAccount extends Component {
  render() {
    return (
      <div className="page-content transaction-page add-account">
        <Container fluid>
          <SettlementNav />

          <div className="add-account-heading mt-5">
            <p>Provide Bank Details</p>
            <span>Your payments will be sent to this account</span>
          </div>
          <div className="d-flex add-account-holder">
            <div className="account-form">
              <div className="first-row d-flex">
                <div>
                  <label htmlFor="">Bank Name</label>
                  <br />
                  <input type="text" placeholder="XYZ Bank" />
                </div>
                <div className="div2">
                  <label htmlFor="">Bank Account Number</label>
                  <br />
                  <input type="text" placeholder="02872011030111" />
                </div>
              </div>
              <div className="first-row second-row d-flex">
                <div>
                  <label htmlFor="">Bank IFSC Code</label>
                  <br />
                  <input type="text" placeholder="ORBC0100287" />
                </div>
                <div className="div2">
                  <label htmlFor="">Re-Enter Bank Account Number</label>
                  <br />
                  <input type="text" placeholder="02872011030111" />
                </div>
              </div>
              <div className="proceed-btn">
                <Link to="/change-account">
                  <button>Proceed</button>
                </Link>
              </div>
            </div>
            <div className="add-account-right-content">
              <div>
                <h5>Message</h5>
                <p>Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="add-account-footer">
            <p>T & C Apply</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default AddNewAccount;

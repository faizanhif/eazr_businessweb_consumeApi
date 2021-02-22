import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import SettlementNav from "./SettlementNav";
import { Link } from "react-router-dom";
// import bankImg from "../../assets/images/hdfc-light.png";
import AccountDetails from "./AccountDetails";
class ChangeAccount extends Component {
  render() {
    return (
      <>
        <div className="page-content transaction-page change-account">
          <Container fluid>
            <SettlementNav />

            <div className="change-account-option">
              <p>Select Bank Account</p>
            </div>
            <div className="d-flex accounts-holder-div">
              <div className="diff-accounts ">
                <AccountDetails />

                <div className="save-btn">
                  <Link to="/settlement/settings">
                    <button>Save</button>
                  </Link>
                </div>
              </div>
              <div className="new-account mt-4">
                <div className="add-btn mt-2">
                  <Link
                    to="/add-new-account"
                    style={{ textDecoration: "none" }}
                  >
                    <button>Add New Account</button>
                  </Link>
                </div>
                <div>
                  <p className="mt-5">
                    Note: You will be receiving your QR code mobile number
                    payments in the same account at 0% fee
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default ChangeAccount;

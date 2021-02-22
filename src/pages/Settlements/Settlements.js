import React, { Component } from "react";
import SettlementNav from "./SettlementNav";
import { Row, Col } from "reactstrap";
import "../Transaction/transaction.css";
import { Table } from "reactstrap";
// import { Link } from "react-router-dom";
import "./settlements.css";
import SingleSettlement from "./SingleSettlement";
class Settlements extends Component {
  render() {
    return (
      <div className="page-content settlement-page transaction-page">
        <Row>
          <Col>
            <SettlementNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="all-transaction-form">
              <div className="all-settlements-form d-flex justify-content-between">
                <div className="third d-flex">
                  <div>
                    <label>Settlement ID</label>
                    <br />
                    <input type="text" />
                  </div>
                  <div>
                    {/* <label>Count</label>
                    <br />
                    <input type="text" /> */}
                  </div>
                  <div className="d-flex tran-form-btn">
                    <div className="search-btn">
                      <button>Search</button>
                    </div>
                    <div className="clear-btn">
                      <button>Clear</button>
                    </div>
                  </div>
                </div>
                {/* <div className="received-section">
                  <div className="d-flex">
                    <div>
                      <h6>Total Amount Received</h6>
                      <p>30 Dec 2021</p>
                    </div>
                    <div>
                      <select>
                        <option>Today</option>
                        <option>This Week</option>
                        <option>This Month</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <h5 className="ml-2">&#8377; 60,568 </h5>
                    <p className="ml-2">From Total 0 Payments</p>
                  </div>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="settlement-table">
            <Table bordered hover className="text-center">
              <thead style={{ background: "#000", color: "#fff" }}>
                <tr>
                  <th>Settlement ID</th>
                  <th>Amount</th>
                  <th>Fees</th>
                  <th>Tax</th>
                  <th>Created At</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <SingleSettlement
                  settlementId="pay_foB8deixfgGjLj"
                  amount="₹950.00"
                  fees="₹19.02	"
                  tax="₹0.02"
                  createdAt="	30 Dec 2021,01:50:26pm"
                  status="Processed"
                />
                <SingleSettlement
                  settlementId="pay_foB8deixfgGjLj"
                  amount="₹950.00"
                  fees="₹19.02	"
                  tax="₹0.02"
                  createdAt="	30 Dec 2021,01:50:26pm"
                  status="Processed"
                />
                <SingleSettlement
                  settlementId="pay_foB8deixfgGjLj"
                  amount="₹950.00"
                  fees="₹19.02	"
                  tax="₹0.02"
                  createdAt="	30 Dec 2021,01:50:26pm"
                  status="Processed"
                />
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="settlement-footer text-center w-100 mt-5">
              <p
                className="text-center w-50 font-size-14"
                style={{ margin: "0 auto" }}
              >
                The amount that gets settled to your bank account will show up
                here. See our{" "}
                <span style={{ color: "#DF8F60" }}>Settlements Guide</span> to
                understand how it works.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="settlement-pagination w-100">
              <p className="float-right font-size-12">Showing 1 of 2</p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Settlements;

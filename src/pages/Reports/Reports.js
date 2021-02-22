import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./report.css";
class Reports extends Component {
  render() {
    return (
      <div className="page-content transaction-page my-orders reports-page">
        <div className="transaction-links">
          <div className="transaction-text-links">
            <ul>
              <li className="mr-2">
                <NavLink
                  activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
                  to="/reports"
                >
                  Reports
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="report-page-info mt-4">
          You can generate new reports or download from the list of recently
          generated reports
        </div>
        <div className="select-report-type">
          <div className="select-report-heading">Select Report Type</div>
          <div className="report-option">
            <select name="" id="">
              <option>Order Reports</option>
              <option value="">Transaction Reports</option>
              <option value="">Settlement Reports</option>
              <option value="">Product Reports</option>
            </select>
          </div>
          <div className="report-desc">
            This report provides a list of the settlements in selected time
            range.It does not include details of the transactions that were
            settled. Details include settlements ID , Date,UTR, and others.
          </div>
        </div>
        <div className="report-page-form">
          <div className="input-field-div">
            <div className="input-field">
              <label htmlFor="">Select Duration</label>
              <br />
              <select name="" id="">
                <option>Today</option>
                <option value="">This Week</option>
                <option value="">This Month</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="">Status</label>
              <br />
              <select name="" id="">
                <option>All</option>
                <option value="">Pending</option>
                <option value="">Success</option>
              </select>
            </div>
          </div>
          <div className="input-field-div">
            <div className="input-field">
              <label htmlFor="">Select Format Type</label>
              <br />
              <select name="" id="">
                <option value="">.PDF</option>
                <option value="">.xslx</option>
                <option value="">.csv</option>
              </select>
            </div>
            <div className="input-field">
              <label htmlFor="">Select Email ID</label>
              <br />
              <select name="" id="">
                <option>Receive report via Email</option>
                <option value="">abc@eazr.in</option>
                <option value="">xyz@gmai.com</option>
              </select>
            </div>
          </div>
          <div className="generate-btn">
            <button>Generate Report</button>
          </div>
        </div>
        <div className="recent-report mt-5">Recent Report</div>
      </div>
    );
  }
}

export default Reports;

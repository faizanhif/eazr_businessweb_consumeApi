import React, { Component } from "react";
// import MyAccountNav from "./MyAccountNav";
import "./myAccount.css";
import SettingsNav from "../Settings/SettingsNav";
class MyAccount extends Component {
  render() {
    return (
      <div className="my-account-page page-content transaction-page ">
        <SettingsNav />
        <div></div>
        <div className="user-info d-flex">
          <div>
            <div className="d-flex">
              <div className="user-img">
                <div style={{ color: "#ffffff" }}>Profile Picture</div>
                <div className="profile-pic">Logo</div>
              </div>
              <div>
                <label for="files" class="btn btn-default choose-pic">
                  <i class="fas fa-folder"></i> Choose File
                </label>
                <input
                  id="files"
                  type="file"
                  class="btn btn-default"
                  style={{ visibility: "hidden" }}
                />
                <p style={{ color: "#ffffff" }}>Max file size : 1MB</p>
              </div>
            </div>
            <p className="my-3 font-size-12" style={{ color: "#ffffff" }}>
              Choose a square image of minimum dimensions 256 X 256 px.
            </p>
          </div>
          <div className="user-details">
            <div className="user-details-form">
              <div className="user-details-input-field">
                <label htmlFor="">Name</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Email ID</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Mobile Number</label>
                <br />
                <input type="text" placeholder="Type Here" />
              </div>
              <div className="user-details-input-field">
                <label htmlFor="">Address</label>
                <br />
                <textarea
                  name=""
                  id=""
                  cols="38"
                  rows="3"
                  placeholder="Type Here"
                ></textarea>
              </div>
              <div className="user-details-form-save-btn">
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;

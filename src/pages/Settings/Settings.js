import React from "react";
import { Component } from "react";
import SettingsNav from "./SettingsNav";
import "./settings.css";
class Settings extends Component {
  render() {
    return (
      <div className="settings-page page-content transaction-page ">
        <SettingsNav />
        <div className="settings-option">
          <div>
            <h6>Theme Color</h6>
          </div>
          <div className="theme-settings mt-3">
            <div className="color-hash-code">
              <p>#9FC3D4</p>
            </div>

            <div className="save-changes-btn">
              <button>Save Changes</button>
            </div>
          </div>
          <div className="mt-2">
            <p style={{ color: "#ffffff" }}>
              Choose a theme color for your brand. The default theme color will
              be used if none is specified.
            </p>
          </div>
          <div className="mt-5">
            <h6>Company Logo</h6>
          </div>
          <div className="image-selection-div mt-3">
            <div className="company-logo">
              <p>Logo</p>
            </div>
            <div className="">
              <div className="ml-5 choose-logo-btn">
                <label for="files" className="btn btn-default">
                  <i class="fas fa-folder"></i> Choose File
                </label>
                <input
                  id="files"
                  type="file"
                  class="btn btn-default"
                  style={{ visibility: "hidden" }}
                />
              </div>
              <div className="ml-5">
                <p style={{ color: "#ffffff" }}>Max file size : 1MB</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <p style={{ color: "#ffffff" }}>
              Choose a square image of minimum dimensions 256 X 256 px.
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-note">
          <p>
            Changes will reflect on Checkout page,Payment Link,Invoice & Payment
            Pages.
          </p>
        </div>
      </div>
    );
  }
}

export default Settings;

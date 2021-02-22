import React from "react";
import { NavLink } from "react-router-dom";
const SettingsNav = () => {
  return (
    <div
      className="transaction-links"
      style={{ borderBottom: "1px solid #424242" }}
    >
      <div className="transaction-text-links">
        <ul>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/settings"
            >
              My Account
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/configuration"
            >
              Configuration
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/api-keys"
            >
              API Keys
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/store-hours"
            >
              Store Hours
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingsNav;

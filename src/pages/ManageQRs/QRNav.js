import React from "react";
import { NavLink } from "react-router-dom";
const QRNav = () => {
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
              to="/manage-qr"
            >
              My QR Code
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/add-upi"
            >
              Add/Edit UPI
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QRNav;

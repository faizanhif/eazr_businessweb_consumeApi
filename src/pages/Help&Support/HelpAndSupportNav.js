import React from "react";
import { NavLink } from "react-router-dom";
const HelpAndSupportNav = () => {
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
              to="/need-help"
            >
              All Tickets
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/open-ticket"
            >
              Open Ticket
            </NavLink>
          </li>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #df8f60", background: "#2c2c2c" }}
              to="/closed-ticket"
            >
              Closed Ticket
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpAndSupportNav;

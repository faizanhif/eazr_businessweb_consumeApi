import React from "react";
import { NavLink } from "react-router-dom";
import "./myOrders.css";
const MyOrdersNav = () => {
  return (
    <div className="transaction-links">
      <div className="transaction-text-links">
        <ul>
          <li className="mr-2">
            <NavLink
              activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
              to="/my-orders"
            >
              New Orders
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
              to="/order-preparing"
            >
              Preparing
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
              to="/order-dispatch"
            >
              Ready to Dispatch
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
              to="/order-completed"
            >
              Completed
            </NavLink>
          </li>
          <li className="ml-5">
            <NavLink
              activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
              to="/all-orders"
            >
              All Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyOrdersNav;

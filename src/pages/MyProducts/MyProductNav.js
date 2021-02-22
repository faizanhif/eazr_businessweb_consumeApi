import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Transaction/transaction.css";
class MyProductNav extends Component {
  render() {
    return (
      <>
        <div className="transaction-links">
          <div className="transaction-text-links">
            <ul>
              <li className="mr-2">
                <NavLink
                  activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
                  to="/my-products"
                >
                  All Products
                </NavLink>
              </li>
              <li className="ml-5">
                <NavLink
                  activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
                  to="/bulk-product"
                >
                  Bulk Upload
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="transaction-icon-links d-flex">
            <div className="pt-2 px-2 first-div">
              <i class="fas fa-grip-lines font-size-20"></i>
            </div>
            <div className="pt-2 px-2">
              <i class="fas fa-bars font-size-20"></i>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default MyProductNav;

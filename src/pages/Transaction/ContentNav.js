import React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import { Col } from "reactstrap";
import "./transaction.css";
class ContentNav extends Component {
  render() {
    return (
      <>
        <div className="transaction-links">
          <ul>
            <Link to="/transaction">
              <li>
                <NavLink
                  activeStyle={{
                    color: " #DF8F60",
                    background: "#2c2c2c",
                  }}
                  to="/transaction"
                >
                  All Transaction
                </NavLink>
              </li>
            </Link>

            <Link to="/failed-transaction">
              <li>
                <NavLink
                  activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
                  to="/failed-transaction"
                >
                  Failed Transaction
                </NavLink>
              </li>
            </Link>
            <Link to="/refunded-transaction">
              <li>
                <NavLink
                  activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
                  to="/refunded-transaction"
                >
                  Refunded Transaction
                </NavLink>
              </li>
            </Link>
            <Link to="/completed-transaction">
              <li>
                <NavLink
                  activeStyle={{ color: " #DF8F60", background: "#2c2c2c" }}
                  to="/completed-transaction"
                >
                  Completed Transaction
                </NavLink>
              </li>
            </Link>
            {/* <li style={{ marginLeft: "10rem", color: "#DF8649" }}>
              + Add Filter
            </li> */}
          </ul>
        </div>
      </>
    );
  }
}

export default ContentNav;

import React from "react";
import { Component } from "react";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
import OrderTable from "./OrdersTable";
import { Table } from "reactstrap";
// import { Link } from "react-router-dom";

class Completed extends Component {
  render() {
    return (
      <div className="page-content transaction-page my-orders">
        <MyOrdersNav />

        <SearchProduct />
        <div className="mt-5">
          <Table
            dark
            hover
            style={{
              color: "#ffffff",
              background: "none",
            }}
          >
            <thead style={{ color: "#737376" }}>
              <tr>
                <th>Order Number</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Settlement</th>
                <th>Customer Ratings</th>
              </tr>
            </thead>
            <tbody>
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Paid"
                customerRating="2.0"
              />
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Unpaid"
                customerRating="3.5"
              />
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Returned"
                customerRating="4.6"
              />
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Returned"
                customerRating="3.5"
              />{" "}
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Returned"
                customerRating="5.0"
              />{" "}
              <OrderTable
                orderNumber="#988123"
                dateAndTime="01/01/2020 at 2:14 Pm"
                amount="₹488"
                settlement="Returned"
                customerRating="1.3"
              />
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Completed;

import React from "react";
import { Component } from "react";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
import SingleOrder from "../SingleOrder";

class DispatchOrder extends Component {
  render() {
    return (
      <div className="page-content transaction-page my-orders">
        <MyOrdersNav />

        <SearchProduct />
        <SingleOrder
          orderNumber="#988123"
          dateAndTime="01/01/2020 at 2:14 Pm"
          name="Devansh Mittle"
          contact="+91 83883 99482"
          tranType="Delivery"
          amt="₹488"
          platform="Mobile"
          item1="Medicine  xyz  X 1"
          item2="Medicine  xyz  X 3"
          item3="Medi  X 3"
          btnText="Dispatched"
          btnBgColor="#3A44A1"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
        />
        <SingleOrder
          orderNumber="#988123"
          dateAndTime="01/01/2020 at 2:14 Pm"
          name="Devansh Mittle"
          contact="+91 83883 99482"
          tranType="Takeaway"
          amt="₹488"
          platform="Mobile"
          item1="Medicine  xyz  X 1"
          item2="Medicine  xyz  X 3"
          item3="Medi  X 3"
          btnText="Dispatched"
          btnBgColor="#3A44A1"
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
        />
      </div>
    );
  }
}

export default DispatchOrder;

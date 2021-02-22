import React from "react";
import { Component } from "react";
import MyOrdersNav from "../MyOrdersNav";
import SearchProduct from "../SearchProduct";
import SingleOrder from "../SingleOrder";

class AllOrders extends Component {
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
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Preparing"
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
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Returned"
          btnBgColor="#DD5C64"
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
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Out For Delivery"
          btnBgColor="#3A44A1"
        />
      </div>
    );
  }
}

export default AllOrders;

import React from "react";
import { Component } from "react";
import MyOrdersNav from "./MyOrdersNav";
import SearchProduct from "./SearchProduct";
// import NoOrders from "./NoOrders";

import SingleOrder from "./SingleOrder";

class MyOrders extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     modal: false,
  //   };
  //   this.toggle = this.toggle.bind(this);
  // }
  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // }
  render() {
    return (
      <div className="page-content transaction-page my-orders">
        <MyOrdersNav />

        <SearchProduct />
        {/* <NoOrders /> */}
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
          btnText="Accept"
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
          additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "
          btnText="Accept"
        />
      </div>
    );
  }
}

export default MyOrders;

import React from "react";
import TransactionTableRow from "../Dashboard/TransactionTableRow";
import { Table } from "reactstrap";
import TranTableHeading from "../Dashboard/TranTableHeading";
const TranTable = () => {
  return (
    <>
      <Table
        bordered
        hover
        style={{ background: "#1d1d1f" }}
        className="latest-transaction-table"
      >
        <TranTableHeading />
        <tbody>
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;950"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="30 Dec 2020 ,02:23:12pm"
            status="Completed"
          />
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;700"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="29 Jan 2021 ,05:30:26pm"
            status="Refunded"
          />
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;500"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="23 Jan 2021 ,09:50:26pm"
            status="Failed"
          />
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;950"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="30 Dec 2020 ,02:23:12pm"
            status="Completed"
          />
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;700"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="29 Jan 2021 ,05:30:26pm"
            status="Refunded"
          />
          <TransactionTableRow
            paymentId="pay_foB8deizfgGjLj"
            eazrPayOrderId="Order_foB8deijLjR340098"
            orderId="1"
            amount="&#8377;500"
            emailId="abc.2021@gmail.com"
            contact="+919876453243"
            createdAt="23 Jan 2021 ,09:50:26pm"
            status="Failed"
          />
        </tbody>
      </Table>
    </>
  );
};

export default TranTable;

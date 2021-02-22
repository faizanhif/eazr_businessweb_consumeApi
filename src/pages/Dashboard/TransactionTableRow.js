import React from "react";

const TransactionTableRow = ({
  paymentId,
  eazrPayOrderId,
  orderId,
  amount,
  emailId,
  contact,
  createdAt,
  status,
}) => {
  const showStatus = () => {
    if (status === "Completed" || status === "completed") {
      return (
        <div
          className="badge badge-soft-success font-size-12"
          /*className="font-size-12 text-center"*/
          // style={{
          //   background: "#1CBB8C",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    } else if (status === "Refunded" || status === "refunded") {
      return (
        <div
          className="badge badge-soft-primary font-size-12"
          // className="font-size-12 text-center"
          // style={{
          //   background: "#5664D2",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    } else {
      return (
        <div
          className="badge badge-soft-danger font-size-12"
          // className="font-size-12 text-center"
          // style={{
          //   background: "#FF3D60",
          //   color: "#fff",
          //   padding: "0.2rem 0.5rem",
          //   borderRadius: "2px",
          // }}
        >
          {status}
        </div>
      );
    }
  };
  return (
    <tr hover style={{ color: "#f0f8ff" }}>
      <td>{paymentId}</td>
      <td>{eazrPayOrderId}</td>
      <td>{orderId}</td>
      <td>{amount}</td>
      <td>{emailId}</td>
      <td>{contact}</td>
      <td>{createdAt}</td>
      <td>{showStatus()}</td>
    </tr>
  );
};

export default TransactionTableRow;

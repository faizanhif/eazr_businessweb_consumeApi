import React from "react";

const TranTableHeading = () => {
  return (
    <thead style={{ color: "#fff", fontWeight: "700", fontSize: "1rem" }}>
      <tr>
        <th>Payment ID</th>
        <th> Eazrpay Order ID</th>
        <th>Order ID</th>
        <th>Amount</th>
        <th>Email ID</th>
        <th>Contact</th>
        <th>Created At</th>
        <th>Status</th>
      </tr>
    </thead>
  );
};

export default TranTableHeading;

import React from "react";
import { Link } from "react-router-dom";
const SingleSettlement = ({
  settlementId,
  amount,
  tax,
  fees,
  createdAt,
  status,
}) => {
  const statusColor = () => {
    if (status === "Completed") {
      return "#3A44A1";
    } else if (status === "Processed") {
      return "#3A955E";
    } else {
      return "#FF5611";
    }
  };
  return (
    <tr>
      <td>
        <Link
          to="/settlement/id"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {settlementId}
        </Link>
      </td>
      <td>
        <Link
          to="/settlement/id"
          style={{ textDecoration: "none", color: "#ffffff" }}
        >
          {amount}
        </Link>
      </td>

      <td>
        <Link
          to="/settlement/id"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {fees}
        </Link>
      </td>
      <td>
        {" "}
        <Link
          to="/settlement/id"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {tax}
        </Link>
      </td>
      <td>
        {" "}
        <Link
          to="/settlement/id"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          {createdAt}
        </Link>
      </td>
      <td>
        <Link
          to="/settlement/id"
          style={{
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <div
            className="badge badge-soft-success font-size-12"
            style={{ color: "#ffffff", background: statusColor() }}
          >
            {status}
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default SingleSettlement;

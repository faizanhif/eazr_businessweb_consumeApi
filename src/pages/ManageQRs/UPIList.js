import React, { useState } from "react";

const UPIList = ({ upiId }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleClick = () => {
    setIsDeleted(!isDeleted);
  };
  return (
    <div
      className="upi-list my-2"
      style={{ display: !isDeleted ? "flex" : "none" }}
    >
      <div className="upi-name">
        <h6>{upiId}</h6>
      </div>
      <div
        className="delete-upi d-flex align-items-center"
        onClick={handleClick}
      >
        <p>Delete</p>
        <i class="fas fa-times ml-2"></i>
      </div>
    </div>
  );
};

export default UPIList;

import React, { useState } from "react";

const HeaderTable = ({ deleteHeader, headerLength, addHeader }) => {
  const [headers] = useState(["Header 1", "Header 2", "Header 3", "Header 4"]);
  const [column, setColumn] = useState(1);
  const [showCrossIcon, setShowCrossIcon] = useState(false);
  const headerData = [];

  const addData = () => {
    for (var i = 0; i < headers.length; i++) {
      headerData.push(
        <td>
          <input type="text" />
        </td>
      );
    }
  };

  const removeColumn = () => {
    setColumn(column - 1);
    headers.pop();
  };

  const addColumns = () => {
    setColumn(column + 1);
    headers.push(`Header ${headers.length + 1}`);
  };

  const displayCrossIcon = () => {
    setShowCrossIcon(!showCrossIcon);
  };

  return (
    <>
      <div className="d-flex  justify-content-between">
        <div className="header-btn d-flex mb-3">
          <div className="create-header-btn">
            <button>Create Header</button>
          </div>
          <div className="add-more-btn">
            <button onClick={addColumns}>
              <i
                class="fas fa-plus font-size-10 mr-2"
                style={{
                  color: "#ffffff",
                }}
              ></i>
              Add More
            </button>
          </div>
        </div>
        <div className="edit-header-btn">
          <button style={{ float: "right" }} onClick={displayCrossIcon}>
            <i
              class="fas fa-edit mr-2"
              style={{
                color: "#424242",
              }}
            ></i>
            Edit Header
          </button>
        </div>
      </div>
      <table className="my-4">
        <thead>
          <tr>
            {/* {removeColumn()} */}
            {addColumns}
            {headers.map((header) => {
              return <th>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {addData()}
            {headerData.map((data) => {
              return data;
            })}
          </tr>
        </tbody>
      </table>

      <i
        class="far fa-times-circle fa-2x cross-icon"
        style={{
          color: "#DD5C64",
          display: !showCrossIcon ? "none" : "block",
        }}
        onClick={removeColumn}
      ></i>
    </>
  );
};

export default HeaderTable;

import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import DragAndDrop from "./DragAndDrop";
import HeaderTable from "./HeaderTable";
import MyProductNav from "./MyProductNav";

class BulkProducts extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      showTable: false,
      header: 0,
      addHeader: 0,
      headerColumns: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.showTable = this.showTable.bind(this);
    this.showHeader = this.showHeader.bind(this);
    this.showCrossIcon = this.showCrossIcon.bind(this);
    this.addHeader = this.addHeader.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  showTable() {
    this.setState({
      showTable: !this.state.showTable,
    });
  }
  showHeader() {
    this.setState({
      header: this.state.header + 1,
    });
  }
  showCrossIcon(headerLength) {
    // this.setState({
    //   headerColumns: headerLength,
    // });
    // console.log(headerLength);
  }

  addHeader() {
    this.setState({
      addHeader: this.state.addHeader + 1,
    });
  }

  render() {
    return (
      <div className="bulk-product page-content transaction-page ">
        <MyProductNav />

        <div className="mt-4">
          <div style={{ color: "#ffffff" }}>CSV File</div>
          <div className="csv-file-btn  w-100 ">
            <div className="bulk-product-choose-upload-btn d-flex  mt-3 ">
              <div className="choose-btn">
                <label for="files" className="btn btn-default">
                  <i class="fas fa-folder"></i> Choose File
                </label>
                <input
                  id="files"
                  type="file"
                  class="btn btn-default"
                  style={{ visibility: "hidden" }}
                />
              </div>
            </div>
            <div className="upload-btn my-5">
              <DragAndDrop />
              <label className="btn">
                <i class="fas fa-cloud-upload-alt mr-2"></i> Upload
              </label>
            </div>
            <div className="d-flex justify-content-between w-100">
              <div className="preview-btn">
                <button>File Preview</button>
                <span className="ml-3">CSV file size : 50 MB</span>
              </div>
              <div></div>
            </div>
          </div>
          <div className="mt-3" style={{ color: "#ffffff" }}>
            Medicine file_1.CSV ....
          </div>
          <div className="bulk-header mt-5">
            {/* <div className="header-btn d-flex">
              <div className="create-header-btn">
                <button>Create Header</button>
              </div>
              <div className="add-more-btn">
                <button>
                  <i
                    class="fas fa-plus font-size-10 mr-2"
                    style={{
                      color: "#ffffff",
                    }}
                  ></i>
                  Add More
                </button>
              </div>
            </div> */}
            <div className="header-table d-flex justify-content-between mt-4 w-100 ">
              <div className="header-table-div" style={{ width: "100%" }}>
                <HeaderTable
                  deleteHeader={this.state.header}
                  headerLength={this.showCrossIcon}
                  addHeader={this.state.addHeader}
                />
                <i
                  class="far fa-times-circle fa-2x cross-icon"
                  style={{
                    color:
                      !this.state.headerColumns === 0 ? "#1d1d1f" : "#DD5C64",
                    display: !this.state.isClicked ? "none" : "block",
                  }}
                  onClick={this.showHeader}
                ></i>
              </div>
              {/* <div className="edit-header-btn">
                <button onClick={this.handleClick}>
                  <i
                    class="fas fa-edit mr-2"
                    style={{
                      color: "#424242",
                    }}
                  ></i>
                  Edit Header
                </button>
              </div> */}
            </div>
            <div className="bulk-product-save-btn">
              <Link to="/my-products">
                <button>Save</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BulkProducts;

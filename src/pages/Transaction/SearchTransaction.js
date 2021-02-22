import React from "react";
import { Row, Col } from "reactstrap";
const SearchTransaction = () => {
  return (
    <Row>
      <Col>
        <div className="all-transaction-form">
          <div className="first d-flex">
            <div>
              <label>Payment ID</label>
              <br />
              <input type="text" />
            </div>
            {/* <div>
              <label>Duration</label>
              <br /> */}
            {/* <input type="date" style={{ color: "gray"}} className="date-input" /> */}
            {/* <select>
                <option>Past 7 Days</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select>
                <option>From</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <select>
                <option>To</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> */}
            <div>
              <label>Order ID</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="second d-flex">
            <div>
              <label>Status</label>
              <br />
              <select>
                <option>All</option>
                <option>Completed</option>
                <option>Refunded</option>
                <option>Failed</option>
              </select>
            </div>
            <div>
              <label>Email ID</label>
              <br />
              <input type="email" className="email-input" />
            </div>
          </div>
          <div className="third d-flex">
            {/* <div>
              <label>Notes</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Count</label>
              <br />
              <input type="text" />
            </div> */}
            <div className="d-flex tran-form-btn">
              <div className="search-btn">
                <button>Search</button>
              </div>
              <div className="clear-btn">
                <button>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SearchTransaction;

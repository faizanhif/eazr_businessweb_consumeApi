import React from "react";
import { Component } from "react";
import { Row, Col } from "reactstrap";

import ContentNav from "./ContentNav";
import SearchTransaction from "./SearchTransaction";
import "./transaction.css";
import TranTable from "./TranTable";
class Transaction extends Component {
  render() {
    return (
      <div className="page-content transaction-page">
        <Row>
          <Col>
            <ContentNav />
          </Col>
        </Row>
        <SearchTransaction />
        <Row className="latest-transaction-row">
          <Col>
            <TranTable />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Transaction;

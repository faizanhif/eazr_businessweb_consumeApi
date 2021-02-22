import React, { Component } from "react";
import BNPL from "./BNPL";
import FAQNav from "./FAQNav";

class FAQs extends Component {
  render() {
    return (
      <div className="faq-page page-content transaction-page">
        <FAQNav />
        <div className="faq-page-content">
          <BNPL />

          <BNPL />
          <BNPL />
          <BNPL />
          <BNPL />
          <BNPL />
        </div>
      </div>
    );
  }
}

export default FAQs;

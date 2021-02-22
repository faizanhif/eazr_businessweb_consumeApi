import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

import { Link, withRouter } from "react-router-dom";

import { connect } from "react-redux";
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import MiniWidgets from "./MiniWidgets";
import RevenueAnalytics from "./RevenueAnalytics";
import SalesAnalytics from "./SalesAnalytics";
import EarningReports from "./EarningReports";

// import {} from "../../store/Redux/authReducer"

import LatestTransactions from "./LatestTransactions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbItems: [
        { title: "Eazr", link: "#" },
        { title: "Dashboard", link: "#" },
      ],
      reports: [
        {
          icon: "ri-stack-line",
          title: "Today's Order",
          value: "4,820",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-store-2-line",
          title: "Today's Transactions",
          value: "₹ 50,456",
          rate: "2.4%",
          desc: "From previous period",
        },
        {
          icon: "ri-briefcase-4-line",
          title: "Current Balance",
          value: "₹ 75,852",
          rate: "2.4%",
          desc: "From previous period",
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          {console.log("dashboared", this.props.successful && <p>jhello</p>)}
          <Container fluid>
            {/* <Breadcrumbs title="Dashboard" breadcrumbItems={this.state.breadcrumbItems} /> */}
            <Row>
              <Col xl={8}>
                <Row>
                  <MiniWidgets reports={this.state.reports} />
                </Row>

                {/* revenue Analytics */}
                <RevenueAnalytics />
              </Col>

              <Col xl={4}>
                {/* sales Analytics */}
                <SalesAnalytics />

                {/* earning reports */}
                <EarningReports />
              </Col>
            </Row>

            <Row className="transaction-table-row">
              <h6 className="font-size-16">Latest Transaction</h6>
              {/* latest transactions */}
              <LatestTransactions />
            </Row>
            <div className="all-transaction-btn">
              <Link to="/transaction">
                <button>See All Transaction</button>
              </Link>
            </div>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  const { successful } = state.Auth;
  return { successful };
};

export default withRouter(connect(mapStatetoProps, null)(Dashboard));

// export default Dashboard;

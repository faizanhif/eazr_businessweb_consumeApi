import React from "react";
import { Component } from "react";
import { Container } from "reactstrap";
import MyProductNav from "./MyProductNav";
import "./myProducts.css";
import { Table } from "reactstrap";
import Burger from "../../assets/images/burger.svg";
// import { FormControlLabel, Switch } from "@material-ui/core";
import SingleProduct from "./SingleProduct";
import { Link, withRouter } from "react-router-dom";

// redux
import { getProducts } from "../../store/Redux/products/actionProducts";
import { connect } from "react-redux";
import { map } from "leaflet";

class MyProducts extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    console.log(this.state.isChecked);
  }

  componentDidMount() {
    this.props.getProducts(1);
  }

  render() {
    return (
      <>
        <div className="page-content transaction-page my-product-page">
          <Container>
            <MyProductNav />

            <div className="add-products d-flex justify-content-between mt-4">
              <div className="add-product-form d-flex">
                <div className="input-field">
                  <input type="text" placeholder="Search Item" />
                </div>
                <div className="d-flex select-div">
                  <select name="" id="">
                    <option>Select Catergory</option>
                    {/* {
                      this.data.map()
                    } */}
                    <option value="">Medicine</option>
                    <option value="">Suppliments</option>
                    <option value="">Medical Equipments</option>
                  </select>
                </div>
                {/* <div className="add-filter ml-5">+ Add Filter</div> */}
              </div>
              <div className="add-btn">
                <Link to="/edit-product">
                  <button>Add New</button>
                </Link>
              </div>
            </div>
            <div className="add-product-pagination w-100 mt-3">
              <p>Showing 1-2</p>
            </div>
            <div className="product-stock">
              <Table
                style={{ background: "#1C1C1E" }}
                className="text-center"
                hover
              >
                <thead>
                  <tr className="text-center">
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Date & Time</th>
                    <th>In Stock Available</th>
                    <th>Enable/Disable</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="200"
                  />
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="100"
                  />
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="0"
                  />
                  <SingleProduct
                    img={Burger}
                    name="Nivea Body milk Lotion"
                    qty="150ml"
                    category="Personal Care"
                    price="$21.00"
                    stock="10"
                  />
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStatetoProps = (state) => {
  const {} = state.Product;
  return {};
};

export default withRouter(
  connect(mapStatetoProps, { getProducts })(MyProducts)
);

// export default MyProducts;

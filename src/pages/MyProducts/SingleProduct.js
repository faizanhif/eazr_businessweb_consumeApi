import React from "react";
import { Component } from "react";
import { FormControlLabel, Switch } from "@material-ui/core";
import { Link } from "react-router-dom";
class SingleProduct extends Component {
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
  }
  render() {
    return (
      <>
        <tr style={{ color: this.state.isChecked && "#ffffff" }}>
          <td className="img">
            <Link to="/view-product">
              <img src={this.props.img} alt="" />
            </Link>
          </td>
          <td>
            <Link to="/view-product">
              <i
                class="fas fa-circle font-size-10 mx-3"
                style={{ color: "#03AA3D" }}
              ></i>
            </Link>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {" "}
              {this.props.name}
            </Link>
          </td>
          <td>
            {" "}
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.qty}
            </Link>
          </td>
          <td>
            {" "}
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.category}
            </Link>
          </td>
          <td>
            {" "}
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.price}
            </Link>
          </td>
          <td>
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              <p style={{ margin: "0" }}>7/1/2020</p>
              <span>9:20 Pm</span>
            </Link>
          </td>
          <td>
            {" "}
            <Link
              to="/view-product"
              style={{
                textDecoration: "none",
                color: this.state.isChecked ? "#ffffff" : "#798598",
              }}
            >
              {this.props.stock}
            </Link>
          </td>
          <td>
            <FormControlLabel
              control={
                <Switch
                  // checked={color === blue}
                  onChange={this.handleChange}
                  // value="dynamic-class-name"
                  color="none"
                  style={{
                    color: this.state.isChecked ? "green" : "#DD5C64",
                  }}
                />
              }
            />
          </td>
          <td>
            <i class="fas fa-pencil-alt" style={{ color: "#2C2C2E" }}></i>
            <Link
              to="/edit-product"
              style={{ textDecoration: "none", color: "#DF8F60" }}
            >
              Edit
            </Link>
          </td>
        </tr>
      </>
    );
  }
}

export default SingleProduct;

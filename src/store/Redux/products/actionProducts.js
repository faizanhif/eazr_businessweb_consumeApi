import {
  PRODUCT_LOADING,
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
} from "../type";
// import { ip } from "../config/config";
import axios from "axios";

export const getProducts = (pageNo) => {
  console.log("page number", pageNo);
  return (dispatch) => {
    dispatch(setProductLoading());

    axios
      .get(
        `https://fluid-catfish-300810.el.r.appspot.com/business/product/getproductsbyuser`,
        {
          params: { pageNo },
        }
      )
      .then((res) => {
        console.log("res", res);

        dispatch({
          type: GET_PRODUCTS,
          payload: res.data,
        });
      })

      .catch((err) => {
        console.log("err", err.response);
        dispatch({
          type: GET_PRODUCTS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch(setProductLoading());

    axios
      .post(
        `https://fluid-catfish-300810.el.r.appspot.com/business/product/addproduct`,
        product
      )
      .then((res) => {
        dispatch({
          type: ADD_PRODUCT,
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_PRODUCT_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const changeProductStatus = (id, status) => {
  return (dispatch) => {
    axios
      .patch(
        `https://fluid-catfish-300810.el.r.appspot.com/business/updateactive`,
        { productId: id, active: status }
      )
      .then((res) => {
        console.log("Status Updated!");
        // ToastAndroid.show("Status Updated!");
      })
      .catch((err) => {
        // ToastAndroid.show("Something went wrong!");
        console.log("Status Updated!");
      });
  };
};

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

const setAuthToken = (token) => {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

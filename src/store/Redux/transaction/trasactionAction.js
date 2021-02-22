import {
  ORDER_TRANSACTIONS_LOADING,
  FETCH_ORDER_TRANSACTIONS,
  FETCH_ORDER_TRANSACTIONS_FAILED,
  CHANGE_ORDER_STATUS,
  CHANGE_ORDER_STATUS_FAILED,
  FETCH_SINGLE_ORDER,
  FETCH_SINGLE_ORDER_FAILED,
} from "./types";
import axios from "axios";
// import { ip } from "../config/config";

export const fetchOrderTransactions = () => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(
        `https://fluid-catfish-300810.el.r.appspot.com/business/transaction/transactions`
      )
      .then((res) => {
        dispatch({
          type: FETCH_ORDER_TRANSACTIONS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ORDER_TRANSACTIONS_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const fetchSingleOrder = (id) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .get(
        `https://fluid-catfish-300810.el.r.appspot.com/business/order/getorderbyid`,
        {
          params: {
            id,
          },
        }
      )
      .then((res) => {
        dispatch({
          type: FETCH_SINGLE_ORDER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_SINGLE_ORDER_FAILED,
          payload: err.response.data,
        });
      });
  };
};

export const changeOrderStatus = (orderid, status, navigation, path) => {
  return (dispatch) => {
    dispatch(setTransactiosLoading());

    axios
      .post(
        `https://fluid-catfish-300810.el.r.appspot.com/business/order/chanageorderstatus`,
        { orderid, status }
      )
      .then((res) => {
        dispatch({
          type: CHANGE_ORDER_STATUS,
          payload: res.data,
        });
        ToastAndroid.show("Order Status Changed", ToastAndroid.LONG);
        if (navigation) {
          navigation.navigate(path);
        }
      })
      .catch((err) => {
        dispatch({
          type: CHANGE_ORDER_STATUS_FAILED,
          payload: err,
        });
      });
  };
};

const setTransactiosLoading = () => {
  return {
    type: ORDER_TRANSACTIONS_LOADING,
  };
};

import {
  LOGIN,
  AUTH_LOADING,
  AUTH_ERRORS,
  SET_CURRENT_USER,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGOUT,
  OTP_VERIFIED,
  OTP_VERIFICATION_FAILED,
  REGISTER_USER,
} from "./type";
// import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import { ip } from "../config/config";
import axios from "axios";
// import { getProfile } from "../actions/profileActions";
// import { DrawerActions } from "@react-navigation/native";
// import {getPermissions} from '../utils/getPermissions';
// import getDeviceInfo from '../utils/getDeviceInfo';
// import {fetchReps} from './reportActions';

//Login
export const login = (emailorphone, password) => {
  return async (dispatch) => {
    dispatch(setAuthLoading());

    axios
      .post(
        `https://fluid-catfish-300810.el.r.appspot.com/business/user/login`,
        {
          emailorphone,
          password,
        }
      )
      .then(async (res) => {
        const { token } = res.data;

        //Set token to auth header
        setAuthToken(token);

        //Decode token to get user data
        const decoded = jwt_decode(token);

        //Set current user
        dispatch(setCurrentUser(decoded, token));

        dispatch({
          type: LOGIN,
        });
        // dispatch(getProfile());

        // navigation.navigate("DrawerNavigation");

        // ToastAndroid.show("Logged in Successfully!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//signup with email, password and phone number
export const registerUser = (user) => {
  return (dispatch) => {
    dispatch(setAuthLoading());
    console.log("userregister", user);

    axios
      .post(
        "https://fluid-catfish-300810.el.r.appspot.com/business/user/signup",
        user
      )
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: REGISTER_USER,
        });
      })
      .catch((err) => {
        console.log("err", err.response.data);
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Login with otp
export const loginotp = (phone) => {
  return (dispatch) => {
    console.log("usephonerr", phone);
    dispatch(setAuthLoading());

    axios
      .post(
        "https://fluid-catfish-300810.el.r.appspot.com/business/user/loginotp",

        phone
      )
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: OTP_SENT,
        });

        // navigation.navigate("OtpVerify", {
        //   phone: phone,
        // });
        // ToastAndroid.show(
        //   "Otp has been sent to your device",
        //   ToastAndroid.LONG
        // );
      })
      .catch((err) => {
        console.log("err", err.response.data);
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
  // return {
  //     type: CHECK_LOGIN,
  //     payload: { user, history }
  // }
};

//Verify otp
export const verifyOtp = (phone, otp, history) => {
  return (dispatch) => {
    dispatch(setAuthLoading());

    axios
      .post(
        `https://fluid-catfish-300810.el.r.appspot.com/business/user/verifyotp`,
        {
          phone,
          otp,
        }
      )
      .then((res) => {
        const { token } = res.data;

        //Set token to auth header
        setAuthToken(token);

        //Decode token to get user data
        const decoded = jwt_decode(token);

        //Set current user
        dispatch(setCurrentUser(decoded, token));
        //  dispatch(getProfile());
        dispatch({
          type: OTP_VERIFIED,
        });
        history.push("/dashboard");
        // navigation.navigate("Permission");
        // ToastAndroid.show("Otp Verified!", ToastAndroid.LONG);
      })
      .catch((err) => {
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Resend otp
export const resendOtp = (phone) => {
  return (dispatch) => {
    dispatch(setAuthLoading());

    axios
      .post(
        `https://fluid-catfish-300810.el.r.appspot.com/business/user/resendotp`,
        {
          phone,
        }
      )
      .then((res) => {
        dispatch({
          type: OTP_SENT,
        });

        // ToastAndroid.show(
        //   "Otp has been resent to your device",
        //   ToastAndroid.LONG
        // );
      })
      .catch((err) => {
        dispatch({
          type: AUTH_ERRORS,
          payload: err.response.data,
        });
      });
  };
};

//Logout user
export const logout = () => {
  return (dispatch) => {
    dispatch(setCurrentUser({}, null));
    // navigation.navigate("SignUp");
    // ToastAndroid.show("Logged Out", ToastAndroid.SHORT);
  };
};

export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING,
  };
};

//Set logged in user
export const setCurrentUser = (decoded, token) => {
  return {
    type: SET_CURRENT_USER,
    payload: { decoded, token },
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

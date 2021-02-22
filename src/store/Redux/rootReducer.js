import { combineReducers } from "redux";

// Front
// import Layout from "./layout/reducer";
import Layout from "../layout/reducer";

// Authentication Module
// import Account from "./auth/register/reducer";
// import Login from "./auth/login/reducer";
// import Forget from "./auth/forgetpwd/reducer";
import Auth from "../Redux/authReducer";
import Product from "../Redux/products/reducerProducts";
import Transaction from "../Redux/transaction/transactionReducer";

const rootReducer = combineReducers({
  // public
  Layout,

  // Authentication
  Auth,
  Product,
  Transaction,
});

export default rootReducer;

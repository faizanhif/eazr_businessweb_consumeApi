import {
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  PROFILE_LOADING,
} from "../type";

const Initial_State = {
  products: null,
  loading: false,
  errors: {},
};

export default (state = Initial_State, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        errors: {},
        products: action.payload,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

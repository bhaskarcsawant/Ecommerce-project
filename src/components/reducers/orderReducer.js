import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
  MY_ORDER_FAIL,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
} from "../constants/orderConstants";


export const orderReducer = (state = { }, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case MY_ORDER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CREATE_ORDER_SUCCESS:
    case MY_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
    case MY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const myOrderReducer = (state = {orders:[] }, action) => {
  switch (action.type) {
    case MY_ORDER_REQUEST:
      return {
        loading: true,
      };
    case MY_ORDER_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case MY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export const orderDetailsReducer = (state = {orderDetail:{} }, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case GET_ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        orderDetail: action.payload,
      };
    case GET_ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};


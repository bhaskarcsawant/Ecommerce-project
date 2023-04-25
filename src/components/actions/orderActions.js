import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MY_ORDER_FAIL,
  MY_ORDER_REQUEST,
  MY_ORDER_SUCCESS,
  GET_ORDER_DETAILS_FAIL,
  GET_ORDER_DETAILS_REQUEST,
  GET_ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";

import axios from "axios";

let API_HOST = "https://ecommerce-project-backend.vercel.app";
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
          `${API_HOST}/api/v1/order/new`,
          order,
          { withCredentials: true },
          config
        );
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        console.log(data)
        
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}
export const loadMyOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDER_REQUEST })
    
        const { data } = await axios.get(
            `${API_HOST}/api/v1/orders/me`,
            {withCredentials:true},
        );
        dispatch({ type: MY_ORDER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: MY_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}

export const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_ORDER_DETAILS_REQUEST });
    
        const { data } = await axios.get(
          `${API_HOST}/api/v1/admin/order/${id}`,
          { withCredentials: true }
        );
        dispatch({ type: GET_ORDER_DETAILS_SUCCESS, payload: data });
        
    } catch (error) {
        dispatch({
          type: GET_ORDER_DETAILS_FAIL,
          payload: error.response.data.message,
        });
    }
}

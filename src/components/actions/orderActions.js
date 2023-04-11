import {
  CLEAR_ERRORS,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/orderConstants";

import axios from "axios";


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
        `/api/v1/order/new`,
        order,
        config
        );
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data })
        
    } catch (error) {
        console.log(error.response)
        dispatch({
            type: CREATE_ORDER_FAIL,
            payload:error.response.data.message,
        })
    }
}

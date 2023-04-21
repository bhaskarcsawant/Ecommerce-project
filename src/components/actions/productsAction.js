import axios from "axios";
import {
  ADMIN_CREATE_PRODUCTS_REQUEST,
  ADMIN_CREATE_PRODUCTS_SUCCESS,
  ADMIN_CREATE_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  PRODUCTS_DETAILS_REQUEST,
  PRODUCTS_DETAILS_SUCCESS,
  PRODUCTS_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";


export const getProducts = (keyword = "", activePage = 1, checked = 'T-Shirt', price = [0, 1500]) => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })
        let link = `/api/v1/products?keyword=${keyword}&page=${activePage}&category=${checked}&price[gt]=${price[0]}&price[lt]=${price[1]}`;

        const { data } = await axios.get(link)

        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: PRODUCTS_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/v1/product/${id}`)

        dispatch({
            type: PRODUCTS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: PRODUCTS_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const createProduct = (productData) => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_CREATE_PRODUCTS_REQUEST });
         const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
          `/api/v1/admin/product/new/`,
          productData,
          config
        );

        dispatch({
          type: ADMIN_CREATE_PRODUCTS_SUCCESS,
          payload: data,
        });

    } catch (error) {
        console.log(error.response.data);
        dispatch({
          type: ADMIN_CREATE_PRODUCTS_FAIL,
          payload: error.response.data.message,
        });
    }
}

export const clearErrors = async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}
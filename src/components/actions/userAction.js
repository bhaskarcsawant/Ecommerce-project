import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAIL,
    CLEAR_ERRORS
} from "../constants/userConstants"
import axios from "axios";


export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/login`, { email, password }, config)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}

export const register = (firstname, lastname, mobile, email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/register`, { firstname, lastname, mobile, email, password }, config)
        dispatch({ type: REGISTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/me`)
        // console.log(data)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })
    }
}
export const logOut = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`)
        // console.log(data)
        dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
        dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message })
    }
}

export const clearErrors = async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}
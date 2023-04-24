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
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  CLEAR_ERRORS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_FAIL,
} from "../constants/userConstants";
import axios from "axios";

let API_HOST = "https://ecommerce-project-backend.vercel.app";

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
          `${API_HOST}/api/v1/login`,
          { email, password },
          config,
          { withCredentials: true },
      );
      console.log(data)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}

export const register = (firstname, lastname, mobile, email, password) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
          `${API_HOST}/api/v1/register`,
          { firstname, lastname, mobile, email, password },
          config
        );
        dispatch({ type: REGISTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: REGISTER_FAIL, payload: error.response.data.message })
    }
}

export const updatePassword = (oldPassword,newPassword,confirmPassword) => async (dispatch) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
          `${API_HOST}/api/v1/password/update/`,
          { oldPassword, newPassword, confirmPassword },
          config
        );
        dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
          type: UPDATE_PASSWORD_FAIL,
          payload: error.response.data.message,
        });
    }
}

export const resetPassword = (token,password, confirmPassword) => async (dispatch) => {
    try {
       dispatch({ type: RESET_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.put(
      `${API_HOST}/api/v1/password/reset/${token}`,
      { password, confirmPassword },
      config
    );
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: "Password Updated successFully." });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`${API_HOST}/api/v1/me`, {
          withCredentials: true,
        });
        // console.log(data)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })
    }
}
export const logOut = () => async (dispatch) => {
    try {
        await axios.get(`${API_HOST}/api/v1/logout`);
        // console.log(data)
        dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
        dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message })
    }
}

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGOT_PASSWORD_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `${API_HOST}/api/v1/password/forgot`,
      { email },
      config
    );
      dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAIL, payload: error.response.data.message });
  }
};


export const clearErrors = async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}
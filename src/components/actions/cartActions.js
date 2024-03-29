import { ADD_TO_CART,REMOVE_FROM_CART, SAVE_SHIPPING_INFO } from "../constants/cartConstants";
import axios from "axios";

let API_HOST = "https://ecommerce-project-backend.vercel.app";
export const addItemToCart = (id,quantity) =>async (dispatch,getState) => {

      let link = `${API_HOST}/api/v1/product/${id}`;

  const { data } = await axios.get(link, { withCredentials: true });
  console.log(data);
      dispatch({
        type: ADD_TO_CART,
          payload: {
              product: data._id,
              name: data.name,
              price: data.price,
              image: data.images[0].url,
              stock: data.stock,
              quantity,
        },
      });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

};
  
export const removeFromCart = (id) =>async (dispatch,getState) => {
      dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
      });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

};
  
export const saveShippingInfo = (data) =>async (dispatch) => {
      dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data,
      });
    
    localStorage.setItem('shippingInfo', JSON.stringify(data))

  };

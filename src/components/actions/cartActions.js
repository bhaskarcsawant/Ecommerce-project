import { ADD_TO_CART } from "../constants/cartConstants";
import axios from "axios";

export const addItemToCart = (id,quantity) =>async (dispatch,getState) => {

      let link = `/api/v1/product/${id}`;

      const { data } = await axios.get(link);
    console.log(data)
      dispatch({
        type: ADD_TO_CART,
          payload: {
              product: data.id,
              name: data.name,
              price: data.price,
              image: data.images[0].url,
              stock: data.stock,
              quantity,
        },
      });
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  };

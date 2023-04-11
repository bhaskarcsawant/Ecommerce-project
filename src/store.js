import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./components/reducers/productReducer";
import { userReducer } from "./components/reducers/userReducer";
import { cartReducer } from "./components/reducers/cartReducer";
import { orderReducer } from "./components/reducers/orderReducer";


const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    cart: cartReducer,
    newOrder: orderReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingData: localStorage.getItem("shippingData")
      ? JSON.parse(localStorage.getItem("shippingData"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store
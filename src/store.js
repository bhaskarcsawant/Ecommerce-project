import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./components/reducers/productReducer";
import { userReducer } from "./components/reducers/userReducer";
import { cartReducer } from "./components/reducers/cartReducer";


const reducer = combineReducers({
    products: productReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    cart:cartReducer,
});

let initialState = {
    cart: {
        cartItems:localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    }
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store
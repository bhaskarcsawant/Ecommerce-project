import { ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS, PRODUCTS_DETAILS_FAIL, CLEAR_ERRORS } from "../constants/productConstants";


export const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: []
            }
        case ALL_PRODUCTS_SUCCESS:
            return {

                loading: false,
                products: action.payload.product,
                productCount: action.payload.productCount
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                productDetails: action.payload,
            }
        case PRODUCTS_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


import React from 'react'
import { useState } from 'react'
import './cartproductcomponent.css'

function CartProductComponent() {
    const [counter, setCounter] = useState(1)
    const add_counter = () => {
        setCounter(counter + 1)
    }
    const minus_counter = () => {
        setCounter(counter - 1)
    }
    return (
        <div className="CartProductComponentContainer">
            <div id="product_icon">
                <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
            </div>
            <div className="cartedProductDataContainer">
                <div className="product_cart_name_container">
                    <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                    <h3 className="product_cartid">#676762</h3>
                </div>
                <div className="carted_product_size_color_container">
                    <h3 className="product_cart_color">White</h3>
                    <h3 className="product_cart_size">XL</h3>
                </div>
                <div className="carted_product_price_counter_container">
                    <div className="counter_container">
                        <div className="minus_icon" onClick={() => minus_counter()}>-</div>
                        <div className="counter">{counter}</div>
                        <div className="plus_icon" onClick={() => add_counter()}>+</div>
                    </div>
                    <h3 className="product_cart_price_mob">₹199</h3>
                </div>
            </div>
            <img className="product_cart_delete_icon" src={require('./assets/close.png')} alt='' />

        </div>
    )
}

export default CartProductComponent
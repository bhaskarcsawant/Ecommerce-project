import React, { useState } from 'react'
import { useEffect } from 'react'
import CartProductComponent from '../cart_product_component/CartProductComponent'
import "./shoppingcartcontainer.css"
import { useSelector } from 'react-redux'

function ShoppingCartContainer() {
    const [screenSize, setScreenSize] = useState(1300)
    const {cartItems} = useSelector(state => state.cart)
    window.addEventListener('resize', () => {
        setScreenSize(window.innerWidth)
    })
    useEffect(() => {
        setScreenSize(window.innerWidth)
    }, [])
    const [counter, setCounter] = useState(1)
    const add_counter = () => {
        setCounter(counter + 1)
    }
    const minus_counter = () => {
        setCounter(counter - 1)
    }
    const showPaymentComponent = () => {
        document.getElementById('cartListContainer').style.display = 'none'
        document.getElementById('cartListContainer2').style.display = 'block'
    }
    const showCartComponent = () => {
        document.getElementById('cartListContainer2').style.display = 'none'
        document.getElementById('cartListContainer').style.display = 'block'
    }
    return (
        <>
            {screenSize > 800 ? (
                <div className="ShoppingCartContainer">
                    <div className="cartListContainer" id='cartListContainer'>
                        <div className="shoppingCartNavTop">
                            <h3 className="shoppingCartNavTopHeader">Shopping Cart</h3>
                            <div className="shoppingCartPageIdentifierContainer">
                                <div className="shoppingCart_icon cartNavIconActive">
                                    <img className='' id='shoppingCart_icon' src={require('./assets/cart.png')} alt='' />
                                </div>
                                <div className="dashh"></div>
                                <div className="deliveryCart_icon">
                                    <img className='' id='deliveryCart_icon' src={require('./assets/delivery.png')} alt='' />
                                </div>
                            </div>
                        </div>

                        <table className='cart_table'>
                            <tr className='cartTableHeaders'>
                                <th style={{ textAlign: "left" }}>Product</th>
                                <th style={{ textAlign: "center" }} >Color</th>
                                <th style={{ textAlign: "center" }}>Size</th>
                                <th style={{ textAlign: "center" }}>Ammount</th>
                                <th style={{ textAlign: "center" }}>Price</th>
                                <th></th>
                            </tr>
                            {cartItems ? cartItems.map(product=> 
                                <tr>
                                    <td className='cart_table_td'>
                                        <div id="product_icon">
                                            <img className='' id='product_icon_img' src={product.image} alt='' />
                                        </div>
                                        <div className="product_cart_name_container">
                                            <h3 className="product_cart_name">{product.name}</h3>
                                            <h3 className="product_cartid">#676762</h3>
                                        </div>
                                    </td>
                                    <td>
                                        <h3 className="product_cart_color">White</h3>
                                    </td>
                                    <td>
                                        <h3 className="product_cart_size">XL</h3>
                                    </td>
                                    <td className='cart_table_td_counter'>
                                        <div className="counter_container">
                                            <div className="minus_icon" onClick={() => minus_counter()}>-</div>
                                            <div className="counter">{counter}</div>
                                            <div className="plus_icon" onClick={() => add_counter()}>+</div>
                                        </div>
                                    </td>
                                    <td>
                                        <h3 className="product_cart_price">₹{product.price}</h3>
                                    </td>
                                    <td>
                                        <img className="product_cart_delete_icon" src={require('./assets/close.png')} alt='' />
                                    </td>

                                </tr>
                            ): null}
   
                        </table>

                        <div className="shoppingCartNavBottom">
                            <div className="goBackBt">
                                <img className="goBackBt_icon" src={require('./assets/arrow1.png')} alt='' />
                                <h3 className="cart_continue_header">Continue Shopping</h3>
                            </div>
                            <form className='cart_promo_form'>
                                <input className='cart_promo_input' type="text" name="" placeholder="Promo Code" />
                                <button type="submit">
                                    <img className="cart_promo_arrow" src={require('./assets/arrow.png')} alt='' />
                                </button>
                            </form>
                            <div className="cart_checkout_container">
                                <h3 className="product_cart_checkout_price">Total cost: <span className='checkout_price'>₹199</span></h3>
                                <button onClick={showPaymentComponent} className='add_to_cart_btn'>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                    <div className="cartListContainer2" id='cartListContainer2'>
                        <div className="shoppingCartNavTop">
                            <h3 className="shoppingCartNavTopHeader">Shipping and Payment</h3>
                            <div className="shoppingCartPageIdentifierContainer">
                                <div className="shoppingCart_icon ">
                                    <img className='' id='shoppingCart_icon' src={require('./assets/cart.png')} alt='' />
                                </div>
                                <div className="dashh"></div>
                                <div className="deliveryCart_icon cartNavIconActive">
                                    <img className='' id='deliveryCart_icon' src={require('./assets/delivery.png')} alt='' />
                                </div>
                            </div>
                        </div>

                        <div className="shippingContainer">
                            <div className="shippingFormContainer">
                                <h2 className='shippingFormHeader'>Shipping Information</h2>
                                <form className='shippingForm' action="">
                                    <input className='ShiipingInput' type="text" placeholder='First Name' />
                                    <input className='ShiipingInput' type="text" placeholder='Last Name' />
                                    <input className='ShiipingInput' type="email" placeholder='Email' />
                                    <input className='ShiipingInput' type="text" placeholder='Mobile No.' />
                                    <input className='ShiipingInput' type="text" placeholder='Address' />
                                    <input className='ShiipingInput' type="number" placeholder='Postal Code' />
                                    <input className='ShiipingInput' type="text" placeholder='City' />
                                    <select name="" id="" className='sort_dropdown' style={{ border: '1px solid var(--grey-1)' }}>
                                        <option value="india" selected>India</option>


                                    </select>
                                </form>
                            </div>
                            <div className="paymentForm">
                                <h2 className='shippingFormHeader'>Payment Method</h2>
                                <div className="paymentFormContainer">
                                    <input className='paymentradio' type="radio" id="cashfree" name="cashfree" value="cashfree" />
                                    <h2 className='shippingFormHeader'>Cashfree Payments</h2>
                                    <input className='paymentradio' type="radio" id="cod" name="cashfree" value="cod" />
                                    <h2 className='shippingFormHeader'>Cash on delivery</h2>
                                </div>
                            </div>
                            <div className="checkoutMiniCart">
                                <h2 className='shippingFormHeader'>Your Cart</h2>
                                <div className="miniCartContainer">
                                    <div className="productMiniCartRow">
                                        <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                                        <div className="product_cart_name_container">
                                            <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                            <h3 className="product_cartid">#676762</h3>
                                        </div>
                                        <h3 className="product_cart_price">₹199</h3>
                                    </div>
                                    <div className="productMiniCartRow">
                                        <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                                        <div className="product_cart_name_container">
                                            <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                            <h3 className="product_cartid">#676762</h3>
                                        </div>
                                        <h3 className="product_cart_price">₹199</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shoppingCartNavBottom">
                            <div onClick={showCartComponent} className="goBackBt">
                                <img className="goBackBt_icon" src={require('./assets/arrow1.png')} alt='' />
                                <h3 className="cart_continue_header">Back</h3>
                            </div>
                            <div className="cart_checkout_container">
                                <h3 className="product_cart_checkout_price">Total cost: <span className='checkout_price'>₹199</span></h3>
                                <button className='add_to_cart_btn'>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>

                </div>) : (
                <div className="ShoppingCartContainer">
                    <div className="cartListContainer" id='cartListContainer'>
                        <div className="shoppingCartNavTop">
                            <h3 className="shoppingCartNavTopHeader">Shopping Cart</h3>
                            <div className="shoppingCartPageIdentifierContainer">
                                <div className="shoppingCart_icon cartNavIconActive">
                                    <img className='' id='shoppingCart_icon' src={require('./assets/cart.png')} alt='' />
                                </div>
                                <div className="dashh"></div>
                                <div className="deliveryCart_icon">
                                    <img className='' id='deliveryCart_icon' src={require('./assets/delivery.png')} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className="cart_products_container">
                            <CartProductComponent />
                        </div>
                        <div className="shoppingCartNavBottom">
                            <div className="mobContinueAndTotalPriceContainer">
                                <div className="goBackBt">
                                    <img className="goBackBt_icon" src={require('./assets/arrow1.png')} alt='' />
                                    <h3 className="cart_continue_header">Continue Shopping</h3>
                                </div>
                                <h3 className="product_cart_checkout_price">Total cost: <span className='checkout_price'>₹199</span></h3>
                            </div>
                            <div className="mobPromoAndCheckoutContatiner">
                                <form className='cart_promo_form'>
                                    <input className='cart_promo_input' type="text" name="" placeholder="Promo Code" />
                                    <button type="submit">
                                        <img className="cart_promo_arrow" src={require('./assets/arrow.png')} alt='' />
                                    </button>
                                </form>

                                <div className="cart_checkout_container">
                                    <button onClick={showPaymentComponent} className='add_to_cart_btn'>CHECKOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cartListContainer2" id='cartListContainer2'>
                        <div className="shoppingCartNavTop">
                            <h3 className="shoppingCartNavTopHeader">Shipping and Payment</h3>
                            <div className="shoppingCartPageIdentifierContainer">
                                <div className="shoppingCart_icon ">
                                    <img className='' id='shoppingCart_icon' src={require('./assets/cart.png')} alt='' />
                                </div>
                                <div className="dashh"></div>
                                <div className="deliveryCart_icon cartNavIconActive">
                                    <img className='' id='deliveryCart_icon' src={require('./assets/delivery.png')} alt='' />
                                </div>
                            </div>
                        </div>

                        <div className="shippingContainer">
                            <div className="shippingFormContainer">
                                <h2 className='shippingFormHeader'>Shipping Information</h2>
                                <form className='shippingForm' action="">
                                    <input className='ShiipingInput' type="text" placeholder='First Name' />
                                    <input className='ShiipingInput' type="text" placeholder='Last Name' />
                                    <input className='ShiipingInput' type="email" placeholder='Email' />
                                    <input className='ShiipingInput' type="text" placeholder='Mobile No.' />
                                    <input className='ShiipingInput' type="text" placeholder='Address' />
                                    <input className='ShiipingInput' type="number" placeholder='Postal Code' />
                                    <input className='ShiipingInput' type="text" placeholder='City' />
                                    <select name="" id="" className='sort_dropdown' style={{ border: '1px solid var(--grey-1)' }}>
                                        <option value="india" selected>India</option>


                                    </select>
                                </form>
                            </div>
                            <div className="paymentForm">
                                <h2 className='shippingFormHeader'>Payment Method</h2>
                                <div className="paymentFormContainer">
                                    <input className='paymentradio' type="radio" id="cashfree" name="cashfree" value="cashfree" />
                                    <h2 className='shippingFormHeader'>Cashfree Payments</h2>
                                    <input className='paymentradio' type="radio" id="cod" name="cashfree" value="cod" />
                                    <h2 className='shippingFormHeader'>Cash on delivery</h2>
                                </div>
                            </div>
                            <div className="checkoutMiniCart">
                                <h2 className='shippingFormHeader'>Your Cart</h2>
                                <div className="miniCartContainer">
                                    <div className="productMiniCartRow">
                                        <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                                        <div className="product_cart_name_container">
                                            <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                            <h3 className="product_cartid">#676762</h3>
                                        </div>
                                        <h3 className="product_cart_price">₹199</h3>
                                    </div>
                                    <div className="productMiniCartRow">
                                        <img className='' id='product_icon_img' src={require('./assets/mask.png')} alt='' />
                                        <div className="product_cart_name_container">
                                            <h3 className="product_cart_name">T-Shirt Summer Vibes</h3>
                                            <h3 className="product_cartid">#676762</h3>
                                        </div>
                                        <h3 className="product_cart_price">₹199</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="shoppingCartNavBottom">
                            <div onClick={showCartComponent} className="goBackBt">
                                <img className="goBackBt_icon" src={require('./assets/arrow1.png')} alt='' />
                                <h3 className="cart_continue_header">Back</h3>
                            </div>
                            <div className="cart_checkout_container">
                                <h3 className="product_cart_checkout_price">Total cost: <span className='checkout_price'>₹199</span></h3>
                                <button className='add_to_cart_btn'>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ShoppingCartContainer
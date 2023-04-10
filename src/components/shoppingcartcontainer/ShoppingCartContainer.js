import React, { useState } from 'react'
import { useEffect } from 'react'
import CartProductComponent from '../cart_product_component/CartProductComponent'
import "./shoppingcartcontainer.css"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, saveShippingInfo } from '../actions/cartActions'

function ShoppingCartContainer() {
    const dispatch = useDispatch()
    const removeFromCartFunc = (id) => { 
        dispatch(removeFromCart(id))
    }
    const { shippingInfo } = useSelector(state => state.cart)
   
    const [screenSize, setScreenSize] = useState(1300)
    const { cartItems } = useSelector(state => state.cart)
    const [totalCost, setTotalCost] = useState(0)
    const [firstName, setFirstName] = useState(shippingInfo.firstName)
    const [lastName, setLastName] = useState(shippingInfo.lastName);
    const [email, setEmail] = useState(shippingInfo.email);
    const [mobile, setMobile] = useState(shippingInfo.mobile);
    const [address, setAddress] = useState(shippingInfo.address);
    const [zip, setZip] = useState(shippingInfo.zip);
    const [city, setCity] = useState(shippingInfo.city);
    const [country, setCountry] = useState("India")
    const [paymentMethod, setPaymentMethod] = useState();
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
    useEffect(() => {
      let sum = 0;
      cartItems.forEach((i) => (sum += (i.price* i.quantity)));
      setTotalCost(sum);
    }, [cartItems]);
    let data = {
      firstName,
      lastName,
      email,
      mobile,
      address,
      zip,
      city,
      country,
    };
    let orderData = {
        cartItems,
        data,
        paymentMethod
    }
    const handlePlaceOrder = () => {
        dispatch(saveShippingInfo(data));
        sessionStorage.setItem("orderInfo", JSON.stringify(orderData));
    }

    return (
      <>
        {screenSize > 800 ? (
          <div className="ShoppingCartContainer">
            <div className="cartListContainer" id="cartListContainer">
              <div className="shoppingCartNavTop">
                <h3 className="shoppingCartNavTopHeader">Shopping Cart</h3>
                <div className="shoppingCartPageIdentifierContainer">
                  <div className="shoppingCart_icon cartNavIconActive">
                    <img
                      className=""
                      id="shoppingCart_icon"
                      src={require("./assets/cart.png")}
                      alt=""
                    />
                  </div>
                  <div className="dashh"></div>
                  <div className="deliveryCart_icon">
                    <img
                      className=""
                      id="deliveryCart_icon"
                      src={require("./assets/delivery.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <table className="cart_table">
                <tr className="cartTableHeaders">
                  <th style={{ textAlign: "left" }}>Product</th>
                  {/* <th style={{ textAlign: "center" }} >Color</th>
                                <th style={{ textAlign: "center" }}>Size</th> */}
                  <th style={{ textAlign: "center" }}>Quantity</th>
                  <th style={{ textAlign: "center" }}>Price</th>
                  <th></th>
                </tr>
                {cartItems
                  ? cartItems.map((product) => (
                      <tr key={product.name}>
                        <td className="cart_table_td">
                          <div id="product_icon">
                            <img
                              className=""
                              id="product_icon_img"
                              src={product.image}
                              alt=""
                            />
                          </div>
                          <div className="product_cart_name_container">
                            <h3 className="product_cart_name">
                              {product.name}
                            </h3>
                            <h3 className="product_cartid">#676762</h3>
                          </div>
                        </td>
                        {/* <td>
                                        <h3 className="product_cart_color">White</h3>
                                    </td>
                                    <td>
                                        <h3 className="product_cart_size">XL</h3>
                                    </td> */}
                        {/* <td className='cart_table_td_counter'>
                                        <div className="counter_container">
                                            <div className="minus_icon" onClick={() => minus_counter()}>-</div>
                                            <div className="counter">{counter}</div>
                                            <div className="plus_icon" onClick={() => add_counter()}>+</div>
                                        </div>
                                    </td> */}
                        <td>
                          <h3 className="product_cart_price">
                            {product.quantity}
                          </h3>
                        </td>
                        <td>
                          <h3 className="product_cart_price">
                            ₹{product.price * product.quantity}
                          </h3>
                        </td>
                        <td>
                          <img
                            className="product_cart_delete_icon"
                            onClick={() => removeFromCartFunc(product.product)}
                            src={require("./assets/close.png")}
                            alt=""
                          />
                        </td>
                      </tr>
                    ))
                  : null}
              </table>

              <div className="shoppingCartNavBottom">
                <div className="goBackBt">
                  <img
                    className="goBackBt_icon"
                    src={require("./assets/arrow1.png")}
                    alt=""
                  />
                  <h3 className="cart_continue_header">Continue Shopping</h3>
                </div>
                <form className="cart_promo_form">
                  <input
                    className="cart_promo_input"
                    type="text"
                    name=""
                    placeholder="Promo Code"
                  />
                  <button type="submit">
                    <img
                      className="cart_promo_arrow"
                      src={require("./assets/arrow.png")}
                      alt=""
                    />
                  </button>
                </form>
                <div className="cart_checkout_container">
                  <h3 className="product_cart_checkout_price">
                    Total cost:{" "}
                    <span className="checkout_price">₹{totalCost}</span>
                  </h3>
                  {cartItems.length === 0 ? null : (
                    <button
                      onClick={showPaymentComponent}
                      className="add_to_cart_btn"
                    >
                      CHECKOUT
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="cartListContainer2" id="cartListContainer2">
              <div className="shoppingCartNavTop">
                <h3 className="shoppingCartNavTopHeader">
                  Shipping and Payment
                </h3>
                <div className="shoppingCartPageIdentifierContainer">
                  <div className="shoppingCart_icon ">
                    <img
                      className=""
                      id="shoppingCart_icon"
                      src={require("./assets/cart.png")}
                      alt=""
                    />
                  </div>
                  <div className="dashh"></div>
                  <div className="deliveryCart_icon cartNavIconActive">
                    <img
                      className=""
                      id="deliveryCart_icon"
                      src={require("./assets/delivery.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="shippingContainer">
                <div className="shippingFormContainer">
                  <h2 className="shippingFormHeader">Shipping Information</h2>
                  <form className="shippingForm" action="">
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      placeholder="First Name"
                      value={
                        shippingInfo.firstName ? shippingInfo.firstName : ""
                      }
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                      value={shippingInfo.lastName ? shippingInfo.lastName : ""}
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      value={shippingInfo.email ? shippingInfo.email : ""}
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setMobile(e.target.value)}
                      type="text"
                      placeholder="Mobile No."
                      value={shippingInfo.mobile ? shippingInfo.mobile : ""}
                    />
                    <input
                      className="ShiipingInput"
                      type="text"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={shippingInfo.address ? shippingInfo.address : ""}
                    />
                    <input
                      className="ShiipingInput"
                      type="number"
                      placeholder="Postal Code"
                      onChange={(e) => setZip(e.target.value)}
                      value={shippingInfo.zip ? shippingInfo.zip : null}
                    />
                    <input
                      className="ShiipingInput"
                      type="text"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                      value={shippingInfo.city ? shippingInfo.city : ""}
                    />
                    <select
                      name=""
                      id=""
                      className="sort_dropdown"
                      style={{ border: "1px solid var(--grey-1)" }}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="india" selected>
                        India
                      </option>
                    </select>
                  </form>
                </div>
                <div className="paymentForm">
                  <h2 className="shippingFormHeader">Payment Method</h2>
                  <div className="paymentFormContainer">
                    <input
                      className="paymentradio"
                      type="radio"
                      id="cod"
                      name="cod"
                      value="cod"
                      selected
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <h2 className="shippingFormHeader">Cash on delivery</h2>
                  </div>
                </div>
                <div className="checkoutMiniCart">
                  <h2 className="shippingFormHeader">Your Cart</h2>
                  <div className="miniCartContainer">
                    {cartItems
                      ? cartItems.map((product) => (
                          <div
                            key={product.name}
                            className="productMiniCartRow"
                          >
                            <img
                              className=""
                              id="product_icon_img"
                              src={product.image}
                              alt=""
                            />
                            <div className="product_cart_name_container">
                              <h3 className="product_cart_name">
                                {product.name}
                              </h3>
                              <h3 className="product_cartid">#676762</h3>
                            </div>
                            <h3 className="product_cart_price">
                              ₹{product.price * product.quantity}
                            </h3>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
              <div className="shoppingCartNavBottom">
                <div onClick={showCartComponent} className="goBackBt">
                  <img
                    className="goBackBt_icon"
                    src={require("./assets/arrow1.png")}
                    alt=""
                  />
                  <h3 className="cart_continue_header">Back</h3>
                </div>
                <div className="cart_checkout_container">
                  <h3 className="product_cart_checkout_price">
                    Total cost:{" "}
                    <span className="checkout_price">₹{totalCost}</span>
                  </h3>
                  <button
                    className="add_to_cart_btn"
                    onClick={() => handlePlaceOrder()}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="ShoppingCartContainer">
            <div className="cartListContainer" id="cartListContainer">
              <div className="shoppingCartNavTop">
                <h3 className="shoppingCartNavTopHeader">Shopping Cart</h3>
                <div className="shoppingCartPageIdentifierContainer">
                  <div className="shoppingCart_icon cartNavIconActive">
                    <img
                      className=""
                      id="shoppingCart_icon"
                      src={require("./assets/cart.png")}
                      alt=""
                    />
                  </div>
                  <div className="dashh"></div>
                  <div className="deliveryCart_icon">
                    <img
                      className=""
                      id="deliveryCart_icon"
                      src={require("./assets/delivery.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="cart_products_container">
                {cartItems
                  ? cartItems.map((product) => (
                      <CartProductComponent
                        removeFromCartFunc={removeFromCartFunc}
                        product={product}
                        key={product.name}
                      />
                    ))
                  : null}
              </div>
              <div className="shoppingCartNavBottom">
                <div className="mobContinueAndTotalPriceContainer">
                  <div className="goBackBt">
                    <img
                      className="goBackBt_icon"
                      src={require("./assets/arrow1.png")}
                      alt=""
                    />
                    <h3 className="cart_continue_header">Continue Shopping</h3>
                  </div>
                  <h3 className="product_cart_checkout_price">
                    Total cost:{" "}
                    <span className="checkout_price">₹{totalCost}</span>
                  </h3>
                </div>
                <div className="mobPromoAndCheckoutContatiner">
                  <form className="cart_promo_form">
                    <input
                      className="cart_promo_input"
                      type="text"
                      name=""
                      placeholder="Promo Code"
                    />
                    <button type="submit">
                      <img
                        className="cart_promo_arrow"
                        src={require("./assets/arrow.png")}
                        alt=""
                      />
                    </button>
                  </form>

                  <div className="cart_checkout_container">
                    {cartItems.length === 0 ? null : (
                      <button
                        onClick={showPaymentComponent}
                        className="add_to_cart_btn"
                      >
                        CHECKOUT
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="cartListContainer2" id="cartListContainer2">
              <div className="shoppingCartNavTop">
                <h3 className="shoppingCartNavTopHeader">
                  Shipping and Payment
                </h3>
                <div className="shoppingCartPageIdentifierContainer">
                  <div className="shoppingCart_icon ">
                    <img
                      className=""
                      id="shoppingCart_icon"
                      src={require("./assets/cart.png")}
                      alt=""
                    />
                  </div>
                  <div className="dashh"></div>
                  <div className="deliveryCart_icon cartNavIconActive">
                    <img
                      className=""
                      id="deliveryCart_icon"
                      src={require("./assets/delivery.png")}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="shippingContainer">
                <div className="shippingFormContainer">
                  <h2 className="shippingFormHeader">Shipping Information</h2>
                  <form className="shippingForm" action="">
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      placeholder="First Name"
                      value={
                        shippingInfo.firstName ? shippingInfo.firstName : ""
                      }
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                      value={shippingInfo.lastName ? shippingInfo.lastName : ""}
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      value={shippingInfo.email ? shippingInfo.email : ""}
                    />
                    <input
                      className="ShiipingInput"
                      onChange={(e) => setMobile(e.target.value)}
                      type="text"
                      placeholder="Mobile No."
                      value={shippingInfo.mobile ? shippingInfo.mobile : ""}
                    />
                    <input
                      className="ShiipingInput"
                      type="text"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={shippingInfo.address ? shippingInfo.address : ""}
                    />
                    <input
                      className="ShiipingInput"
                      type="number"
                      placeholder="Postal Code"
                      onChange={(e) => setZip(e.target.value)}
                      value={shippingInfo.zip ? shippingInfo.zip : null}
                    />
                    <input
                      className="ShiipingInput"
                      type="text"
                      placeholder="City"
                      onChange={(e) => setCity(e.target.value)}
                      value={shippingInfo.city ? shippingInfo.city : ""}
                    />
                    <select
                      name=""
                      id=""
                      className="sort_dropdown"
                      style={{ border: "1px solid var(--grey-1)" }}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="india" selected>
                        India
                      </option>
                    </select>
                  </form>
                </div>
                <div className="paymentForm">
                  <h2 className="shippingFormHeader">Payment Method</h2>
                  <div className="paymentFormContainer">
                    <input
                      className="paymentradio"
                      type="radio"
                      id="cod"
                      name="cod"
                      value="cod"
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <h2 className="shippingFormHeader">Cash on delivery</h2>
                  </div>
                </div>
                <div className="checkoutMiniCart">
                  <h2 className="shippingFormHeader">Your Cart</h2>
                  <div className="miniCartContainer">
                    {cartItems
                      ? cartItems.map((product) => (
                          <div
                            key={product.name}
                            className="productMiniCartRow"
                          >
                            <img
                              className=""
                              id="product_icon_img"
                              src={product.image}
                              alt=""
                            />
                            <div className="product_cart_name_container">
                              <h3 className="product_cart_name">
                                {product.name}
                              </h3>
                              <h3 className="product_cartid">#676762</h3>
                            </div>
                            <h3 className="product_cart_price">
                              ₹{product.price * product.quantity}
                            </h3>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
              <div className="shoppingCartNavBottom">
                <div onClick={showCartComponent} className="goBackBt">
                  <img
                    className="goBackBt_icon"
                    src={require("./assets/arrow1.png")}
                    alt=""
                  />
                  <h3 className="cart_continue_header">Back</h3>
                </div>
                <div className="cart_checkout_container">
                  <h3 className="product_cart_checkout_price">
                    Total cost: <span className="checkout_price">₹199</span>
                  </h3>
                  <button
                    className="add_to_cart_btn"
                    onClick={() => handlePlaceOrder()}
                  >
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default ShoppingCartContainer
import React, { useEffect } from 'react'
import NavBar from '../navbar/NavBar'
import './MyOrders.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadMyOrders } from '../actions/orderActions';

function MyOrders() {
      const navigate = useNavigate();
    const dispatch = useDispatch();
    const {orders} = useSelector((state) => state.myOrder)
      const handleBack = () => {
        navigate("/account");
    };
    useEffect(() => { dispatch(loadMyOrders()) }, [dispatch]);
  return (
    <>
      <div className="logoutBt" onClick={() => handleBack()}>
        Back
          </div>
          <div className="ordersTableContainer">
      <table className="cart_table">
        <tr className="cartTableHeaders">
          <th style={{ textAlign: "center" }}>cost</th>
          {/* <th style={{ textAlign: "center" }} >Color</th>
                                <th style={{ textAlign: "center" }}>Size</th> */}
          <th style={{ textAlign: "center" }}>status</th>
          <th style={{ textAlign: "center" }}>action</th>
          <th></th>
        </tr>
        {orders
          ? orders.map((product) => (
              <tr key={product.id}>
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
                  <h3 className="product_cart_price">{product.totalPrice}</h3>
                </td>
                <td>
                  <h3 className="product_cart_price">{product.orderStatus}</h3>
                </td>
                <td>
                  <Link to="/account/myorders">
                    <div className="UserActionsBt">Detail</div>
                  </Link>
                </td>
              </tr>
            ))
          : null}
              </table>
              </div>
    </>
  );
}

export default MyOrders
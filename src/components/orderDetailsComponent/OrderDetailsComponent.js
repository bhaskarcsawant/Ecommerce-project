import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import "./OrderDetails.css";
import { getOrderDetails } from '../actions/orderActions';

function OrderDetailsComponent() {
      const navigate = useNavigate();
      const dispatch = useDispatch();
  const { orderDetail } = useSelector((state) => state.orderDetails);
  const {id} = useParams()
  const handleBack = () => {
    navigate("/account/myorders/");
  };
    useEffect(() => {
      dispatch(getOrderDetails(id));
    }, [dispatch, id]);
  console.log(orderDetail)
  return (
    <>
      <div className="logoutBt" onClick={() => handleBack()}>
        Back
      </div>
      {orderDetail ? (
        <div className="orderDetailsContainer">
          <div className="orderDataContainer">
            <div className="shippingInfoContainer">
              <h1 className="ShippingInfoHeader">ShippingInfo :</h1>
              <div className="shippingData">
                <h1 className="ShippingInfoHeader1">Address :</h1>
                <h2 className="ShippingInfoHeader2">
                  {orderDetail.shippingInfo.address}
                </h2>
                <h1 className="ShippingInfoHeader1">City :</h1>
                <h2 className="ShippingInfoHeader2">
                  {orderDetail.shippingInfo.city}
                </h2>
                <h1 className="ShippingInfoHeader1">Country :</h1>
                <h2 className="ShippingInfoHeader2">
                  {orderDetail.shippingInfo.contry}
                </h2>
                <h1 className="ShippingInfoHeader1">Pincode :</h1>
                <h2 className="ShippingInfoHeader2">
                  {orderDetail.shippingInfo.pincode}
                </h2>
                <h1 className="ShippingInfoHeader1">Phone No. :</h1>
                <h2 className="ShippingInfoHeader2">
                  {orderDetail.shippingInfo.address}
                </h2>
                <h1 className="ShippingInfoHeader1">Payment Method :</h1>
                <h2 className="ShippingInfoHeader2">COD</h2>
                <h1 className="ShippingInfoHeader1">Total Cost :</h1>
                <h2 className="ShippingInfoHeader2">
                  ₹{orderDetail.totalPrice}/-
                </h2>
                <h1 className="ShippingInfoHeader1">Order items :</h1>
                <div className="orderItemsContainer">
                  {orderDetail.orderItems.map((product,id) => (
                    <div className="orderItem">
                      <h2 className="ShippingInfoHeader2">{ id+1}</h2>
                      <img
                        className="orderItemImage"
                        src={product.image}
                        alt=""
                      />
                      <h2 className="ShippingInfoHeader2">COD</h2>
                      <h2 className="ShippingInfoHeader2">{product.quantity}</h2>
                      <h2 className="ShippingInfoHeader2">₹{ product.price * product.quantity }/-</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default OrderDetailsComponent;
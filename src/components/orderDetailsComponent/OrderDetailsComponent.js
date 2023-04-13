import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./OrderDetails.css";

function OrderDetailsComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBack = () => {
    navigate("/account/myorders/");
  };
  return (
    <>
      <div className="logoutBt" onClick={() => handleBack()}>
        Back
      </div>
      <div className="orderDetailsContainer">
        <div className="orderDataContainer">
          <div className="shippingInfoContainer">
            <h1 className="ShippingInfoHeader">ShippingInfo :</h1>
            <div className="shippingData">
              <h1 className="ShippingInfoHeader1">Address :</h1>
              <h2 className="ShippingInfoHeader2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores dicta, deserunt temporibus, veniam accusamus nesciunt,
                enim nam quos tempora fugiat sequi quibusdam quod rem
                exercitationem eaque qui pariatur atque cumque.
              </h2>
              <h1 className="ShippingInfoHeader1">City :</h1>
              <h2 className="ShippingInfoHeader2">Chiplun</h2>
              <h1 className="ShippingInfoHeader1">Country :</h1>
              <h2 className="ShippingInfoHeader2">India</h2>
              <h1 className="ShippingInfoHeader1">Pincode :</h1>
              <h2 className="ShippingInfoHeader2">415605</h2>
              <h1 className="ShippingInfoHeader1">Phone No. :</h1>
              <h2 className="ShippingInfoHeader2">787878788</h2>
              <h1 className="ShippingInfoHeader1">Payment Method :</h1>
              <h2 className="ShippingInfoHeader2">COD</h2>
              <h1 className="ShippingInfoHeader1">Total Cost :</h1>
              <h2 className="ShippingInfoHeader2">₹15151/-</h2>
              <h1 className="ShippingInfoHeader1">Order items :</h1>
              <div className="orderItemsContainer">
                <div className="orderItem">
                  <h2 className="ShippingInfoHeader2">1</h2>
                  <img
                    className="orderItemImage"
                    src="https://imagescdn.planetfashion.in/img/app/product/6/619519-5965503.jpg?auto=format"
                    alt=""
                  />
                  <h2 className="ShippingInfoHeader2">COD</h2>
                  <h2 className="ShippingInfoHeader2">1</h2>
                  <h2 className="ShippingInfoHeader2">₹1212/-</h2>
                </div>
                <div className="orderItem">
                  <h2 className="ShippingInfoHeader2">1</h2>
                  <img
                    className="orderItemImage"
                    src="https://imagescdn.planetfashion.in/img/app/product/6/619519-5965503.jpg?auto=format"
                    alt=""
                  />
                  <h2 className="ShippingInfoHeader2">COD</h2>
                  <h2 className="ShippingInfoHeader2">1</h2>
                  <h2 className="ShippingInfoHeader2">₹1212/-</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailsComponent;
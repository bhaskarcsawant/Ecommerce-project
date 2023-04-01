import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { forgetPassword } from "../actions/userAction";
import Loader from "../Loader/Loader";
import "./ForgetPassword.css";

function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("");

  const { loading, error, message } = useSelector(
    (state) => state.user
    );

  const handleBack = () => {
    navigate("/login");
  };
  const handleForgetPassword = () => {
    dispatch(forgetPassword(emailId));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="MyProfileHeader">Change password</h1>
          <div className="logoutBt" onClick={() => handleBack()}>
            Back
          </div>
          <div className="profileactionsContainer">
            <div className="userDataContainer">
              <h3 className="passwordHeader">Enter email :</h3>
              <input
                className="passwordInput"
                onChange={(e) => setEmailId(e.target.value)}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="userActionsContainer">
              <div className="UserActionsBt" onClick={handleForgetPassword}>
                Send Email
              </div>
            </div>
            {/* {error ? <div className="error">{error}</div> : null} */}
            {message && message === "user not found" ? (
              <div className="error">{message}</div>
            ) : null}
            {message && message !== "user not found" ? (
              <div className="success">{message}</div>
            ) : null}
          </div>
        </>
      )}
    </>
  );
}

export default ForgetPassword;

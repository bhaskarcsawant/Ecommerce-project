import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword } from "../actions/userAction";
import Loader from "../Loader/Loader";
import "./ChangePassword.css";

function ChangePassword() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  const { loading, isAuthenticated, user ,error,message} = useSelector((state) => state.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  const handleBack = () => {
    navigate("/account");
    };
    const handleChangePassword = () => {
        dispatch(updatePassword(oldPassword,newPassword,confirmPassword));
     }
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
              <h3 className="passwordHeader">Previous password :</h3>
              <input
                className="passwordInput"
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                name=""
                id=""
              />
              <h3 className="passwordHeader">New password :</h3>
              <input
                className="passwordInput"
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                name=""
                id=""
              />
              <h3 className="passwordHeader">Confirm password :</h3>
              <input
                className="passwordInput"
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                name=""
                id=""
              />
            </div>
            <div className="userActionsContainer">
              <div className="UserActionsBt" onClick={handleChangePassword}>
                Change Password
              </div>
            </div>
            {error ? (
              <div className="error">{error}</div>
            ) :null}
            {message ? (
              <div className="success">{message}</div>
            ) :null}
          </div>
        </>
      )}
    </>
  );
}

export default ChangePassword;

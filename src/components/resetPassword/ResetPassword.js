import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "../actions/userAction";
import Loader from "../Loader/Loader";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
    );
        const { token } = useParams();

  useEffect(() => {
    if (!isAuthenticated) {
    //   navigate("/login"); 
    }
  }, [navigate, isAuthenticated]);

  const handleBack = () => {
    navigate("/login");
  };
  const handleChangePassword = () => {
      dispatch(resetPassword(token, newPassword, confirmPassword));
       navigate("/login");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="MyProfileHeader">Update password</h1>
          <div className="logoutBt" onClick={() => handleBack()}>
            Back
          </div>
          <div className="profileactionsContainer">
            <div className="userDataContainer">
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
                Update Password
              </div>
            </div>
            {error ? <div className="error">{error}</div> : null}
            {message ? <div className="success">{message}</div> : null}
          </div>
        </>
      )}
    </>
  );
}

export default ResetPassword;

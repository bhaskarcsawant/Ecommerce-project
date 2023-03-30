import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../actions/userAction'
import Loader from '../Loader/Loader'
import NavBar from '../navbar/NavBar'
import './Account.css'

function Account() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, isAuthenticated, user } = useSelector((state) => state.user)

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login')
        }
    }, [navigate, isAuthenticated])

    const handleLogout = () => {
        dispatch(logOut())
    }
    return (
        <>
            {loading ? (<Loader />) : (
                <>
                    {user.role === 'Admin' ? (

                        <Link to="/admin/dashboard"><div className="AdminDashboardBt">Admin Dashboard</div></Link>
                    ) : null}
                    <h1 className='MyProfileHeader'>My Profile</h1>
                    <div className="logoutBt" onClick={() => handleLogout()}>Log Out</div>
                    <div className="profileactionsContainer">
                        <div className="userDataContainer">
                            <h2 className='userName'>Name : {user.firstname} {user.lastname}.</h2>
                            <h2 className='userEmailId'>Email : {user.email}</h2>
                        </div>
                        <div className="userActionsContainer">
                            <Link to="/admin/dashboard"><div className="UserActionsBt">My Orders</div></Link>
                            <Link to="/admin/dashboard"><div className="UserActionsBt">Change Password</div></Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Account
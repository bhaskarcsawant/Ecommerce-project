import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../actions/userAction'
import Loader from '../Loader/Loader'
import NavBar from '../navbar/NavBar'
import './Account.css'

function Account() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, isAuthenticated } = useSelector((state) => state.user)

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

                <div className="logoutBt" onClick={() => handleLogout()}>Log Out</div>
            )}
        </>
    )
}

export default Account
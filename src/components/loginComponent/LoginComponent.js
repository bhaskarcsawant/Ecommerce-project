import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login } from '../actions/userAction'
import Loader from '../Loader/Loader'

function LoginComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, error, isAuthenticated } = useSelector((state) => state.user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

    }
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/account')
        }
    }, [navigate, isAuthenticated])

    return (
        <>
            {loading ? (<Loader />) : (

                <div className='LoginComponentContainer'>
                    <h1 className='LoginHeader'>Login</h1>
                    <form className='loginForm' action="">
                        <input className='loginInput' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email Id' />
                        <input className='loginInput' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                        <a href="/forget-password">
                            <h3 className='loginlinks'>Forgot password ?</h3>
                        </a>
                        <Link to="/register">
                            <h3 className='loginlinks'>New user? Register</h3>
                        </Link>
                        <button className='loginBt' onClick={(e) => handleLogin(e)}>Login</button>
                    </form>
                    {error ? (
                        <div className="error">{error}</div>
                    ) : null}
                </div>
            )}
        </>
    )
}

export default LoginComponent
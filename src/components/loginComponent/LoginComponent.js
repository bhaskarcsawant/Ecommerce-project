import React from 'react'
import { Link } from 'react-router-dom'
import './LoginComponent.css'

function LoginComponent() {
    return (
        <div className='LoginComponentContainer'>
            <h1 className='LoginHeader'>Login</h1>
            <form className='loginForm' action="">
                <input className='loginInput' type="text" placeholder='Enter your Email Id' />
                <input className='loginInput' type="password" placeholder='Enter your Password' />
                <Link to="">
                    <h3 className='loginlinks'>Forgot password ?</h3>
                </Link>
                <Link to="/register">
                    <h3 className='loginlinks'>New user? Register</h3>
                </Link>
                <button className='loginBt'>Login</button>
            </form>
        </div>
    )
}

export default LoginComponent
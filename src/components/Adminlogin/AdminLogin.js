import React from 'react'
import './AdminLogin.css'
import loginLogo from './assets/login.png'

function AdminLogin() {
    return (
        <div className="adminLoginConatiner">
            <div className="loginBox">
                <img className='loginLogo' src={loginLogo} alt="" />
                <form className='loginForm' action="">
                    <input className='loginTextBox' type="password" placeholder='Enter your password' />
                    <button id='loginBt'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginComponent.css'

function LoginComponent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className='LoginComponentContainer'>
            <h1 className='LoginHeader'>Login</h1>
            <form className='loginForm' action="">
                <input className='loginInput' type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email Id' />
                <input className='loginInput' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                <Link to="/password/forget">
                    <h3 className='loginlinks'>Forgot password ?</h3>
                </Link>
                <Link to="/register">
                    <h3 className='loginlinks'>New user? Register</h3>
                </Link>
                <button className='loginBt' onClick={(e) => handleLogin(e)}>Login</button>
            </form>
        </div>
    )
}

export default LoginComponent
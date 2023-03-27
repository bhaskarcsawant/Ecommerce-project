import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './RegisterComponent.css'

function RegisterComponent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(name, email, password, confirmPassword)
    }

    return (
        <div className='LoginComponentContainer'>
            <h1 className='LoginHeader'>Register</h1>
            <form className='loginForm' action="">
                <input className='loginInput' onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
                <input className='loginInput' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your Email Id' />
                <input className='loginInput' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                <input className='loginInput' type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

                <Link to="/login">
                    <h3 className='loginlinks'>Already user? Login</h3>
                </Link>
                <button className='loginBt' onClick={(e) => handleRegister(e)}>Register</button>
            </form>
        </div>
    )
}

export default RegisterComponent
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './RegisterComponent.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register } from '../actions/userAction'
import Loader from '../Loader/Loader'

function RegisterComponent() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading, error, isAuthenticated } = useSelector((state) => state.user)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState()

    const handleRegister = (e) => {
        e.preventDefault()
        if (password === confirmPassword) {
            console.log(firstName, lastName, mobile, email, password)
            dispatch(register(firstName, lastName, mobile, email, password))
        }
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
                    <h1 className='LoginHeader'>Register</h1>
                    <form className='loginForm' action="">
                        <input className='loginInput' onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='Enter your first name' />
                        <input className='loginInput' onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Enter your last name' />
                        <input className='loginInput' onChange={(e) => setMobile(e.target.value)} type="number" placeholder='Enter your mobile no.' />
                        <input className='loginInput' onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter your Email Id' />
                        <input className='loginInput' type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                        <input className='loginInput' type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' />

                        <Link to="/login">
                            <h3 className='loginlinks'>Already user? Login</h3>
                        </Link>
                        <button className='loginBt' onClick={(e) => handleRegister(e)}>Register</button>
                    </form>
                    {error ? (
                        <div className="error">{error}</div>
                    ) : null}
                </div>
            )}
        </>
    )
}

export default RegisterComponent
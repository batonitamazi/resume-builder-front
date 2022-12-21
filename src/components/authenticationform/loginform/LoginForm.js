import React from 'react'
import '../authenticationform.css'
import {useNavigate} from 'react-router-dom'


function LoginForm() {
    const navigate = useNavigate()
    return (
        <div className='auth--container'>
            <h1 className='auth--header'>Login</h1>
            <div className='auth--form'>
                <label className='form--label'>
                    <input placeholder='Email address' className='base--input' type="email" />
                </label>
                <label className='form--label'>
                    <input placeholder='Password' className='base--input' type="password" />
                </label>
            </div>
            <button className='auth--btn'>
                Login to your account
            </button>
            <div className='lost--acc'>
                Don't have an account?
                <span className='signup--span' onClick={() => navigate('/signup')}>
                    Sign up
                </span>
            </div>
        </div>
    )
}

export default LoginForm
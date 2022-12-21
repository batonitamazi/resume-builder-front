import React from 'react'
import '../authenticationform.css'
import {useNavigate} from 'react-router-dom'

function RegistrationForm() {
    const navigate = useNavigate()
    return (
        <div className='auth--container'>

            <h1 className='auth--header'>Register</h1>
            <div className='auth--form'>
                <label className='form--label'>
                    <input placeholder='Email address' className='base--input' type="email" />
                </label>
                <label className='form--label'>
                    <input placeholder='Password' className='base--input' type="password" />
                </label>
                <label className='form--label'>
                    <input placeholder='Confirm Password' className='base--input' type="password" />
                </label>
            </div>
            <button className='auth--btn'>
                Register
            </button>
            <div className='lost--acc'>
                Already Have an account
                <span className='signup--span' onClick={() => navigate('/login')}>
                    Sign in
                </span>
            </div>
        </div>
    )
}

export default RegistrationForm
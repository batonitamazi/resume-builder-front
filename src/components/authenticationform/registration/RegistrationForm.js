import React, { useState } from 'react'
import '../authenticationform.css'
import { useNavigate } from 'react-router-dom'
import {useSignup} from '../../../hooks/useSignup'

function RegistrationForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {signup, isLoading, error} = useSignup();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, password)
    }
    return (
        <form className='auth--container' onSubmit={handleSubmit}>
            <h1 className='auth--header'>Register</h1>
            <div className='auth--form'>
                <label className='form--label'>
                    <input
                        placeholder='Email address'
                        className='base--input'
                        type="email"
                        value={email}
                        onChange={(e ) => setEmail(e.target.value)}
                    />
                </label>
                <label className='form--label'>
                    <input
                        placeholder='Password'
                        className='base--input'
                        type="password"
                        value={password}
                        onChange={(e ) => setPassword(e.target.value)}

                    />
                </label>
                {/* <label className='form--label'>
                    <input placeholder='Confirm Password' className='base--input' type="password" />
                </label> */}
            </div>
            <button className='auth--btn' disabled={isLoading}>
                Register
            </button>
            <div className='lost--acc'>
                Already Have an account
                <span className='signup--span' onClick={() => navigate('/login')}>
                    Sign in
                </span>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default RegistrationForm
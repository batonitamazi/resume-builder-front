import React, { useState } from 'react'
import '../authenticationform.css'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'


function LoginForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password)
        
        await login(email, password);
    }
    return (
        <form className='auth--container' onSubmit={handleSubmit}>
            <h1 className='auth--header'>Login</h1>
            <div className='auth--form'>
                <label className='form--label'>
                    <input
                        placeholder='Email address'
                        className='base--input'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
            </div>
            <button className='auth--btn' disabled={isLoading}>
                Login to your account
            </button>
            <div className='lost--acc'>
                Don't have an account?
                <span className='signup--span' onClick={() => navigate('/signup')}>
                    Sign up
                </span>
            </div>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default LoginForm
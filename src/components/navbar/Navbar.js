import React, { useContext } from 'react'
import './navbar.css'
import { themeContext } from '../../providers/theme.provider'

function Navbar() {
    const { changeTheme, theme } = useContext(themeContext)
    return (
        <div className='navbar'>
            <div className='logo--container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26"><path fill="#FFF"
                    fillRule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z" />
                </svg>
            </div>
            <div className='nav--actions'>
                <img
                    src={theme === "dark" ? './assets/sun.svg' : "./assets/moon.svg"}
                    alt="background switcher"
                    className='bg--switcher'
                    onClick={() => changeTheme()}
                />
            </div>
        </div>
    )
}

export default Navbar
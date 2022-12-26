import React, { useContext, useState } from 'react'
import './navbar.css'
import { themeContext } from '../../providers/theme.provider'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useLogout } from '../../hooks/useLogOut'



function Navbar() {
    const { user } = useAuthContext()
    const { changeTheme, theme } = useContext(themeContext)
    const [open, setOpen] = useState(false)
    const { logout } = useLogout();
    const handleLogOut = () => {
        logout()
        setOpen(false)
    }
    const handleOpenDialog = () => {
        setOpen(!open)
    }
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
                {user ?
                    <div className='avatar--card' onClick={handleOpenDialog} >
                        <img src='./assets/image-avatar.jpg' className='avatar--img' alt='avatar' />
                    </div>
                    : null}
            </div>
            {open ?
                <div className='logout-dialog' onClick={handleLogOut}>
                    Log Out
                </div>: null
            }

        </div>
    )
}

export default Navbar
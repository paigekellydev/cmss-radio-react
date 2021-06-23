import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'

export default function Header({ user, handleLogout}) {

    const [displayNavBar, setDisplayNavBar] = useState(false)

    const displayNavElement = () => {
        if (displayNavBar) {
            return (
                <NavBar 
                    authorized={user.authorized_user} 
                    handleLogout={handleLogout} 
                    name={`${user.first_name} ${user.last_name}`}
                />
            )
        }
    }

    const handleProfileClick = _ => {
        !displayNavBar
            ? setDisplayNavBar(true)
            : setDisplayNavBar(false)
    }

    const displayNav = _ => {
        if (user.id) {
            return (
                <div>
                    <span>
                        <p onClick={handleProfileClick}>{`${user.first_name} ${user.last_name}`}</p>
                    </span>
                    {displayNavElement()}
                </div>
            )
        }
    }

    return (
        <header>
            <img className="logo" src="https://i.imgur.com/ey6gFFK.png" alt="" />
            {displayNav()}
        </header>
    )
}

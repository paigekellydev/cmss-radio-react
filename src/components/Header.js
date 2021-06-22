import React, { useState } from 'react';
import NavBar from '../components/NavBar'

export default function Header(props) {

    const [displayNavBar, setDisplayNavBar] = useState(false)

    const displayNav = (event) => {
        if (displayNavBar) {
            return (
                <NavBar 
                    authorized={props.user.authorized_user} 
                    handleLogout={props.handleLogout} 
                    name={`${props.user.first_name} ${props.user.last_name}`}
                />
            )
        }
    }

    const handleProfileClick = (event) => {
        if (displayNavBar === false) {
            setDisplayNavBar(true)
        } else {
            setDisplayNavBar(false)
        }
    }
    return (
        <header>
            <span>
                <img className="logo" src="https://i.imgur.com/ey6gFFK.png" alt="" />
            </span>
            <span>
                <p onClick={handleProfileClick}>{`${localStorage.first_name} ${localStorage.last_name}`}</p>
            </span>
            {displayNav()}
        </header>
    )
}

import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar(props) {
    const handleClick = (event) => {
        props.handleLogout()
    }
    return (
        <Nav>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/playlists">Playlists</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/login" onClick={handleClick}>Logout</NavLink>
            </NavItem>
        </Nav>
    )
}

export default NavBar

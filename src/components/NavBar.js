import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar() {
    return (
        <Nav>
            <NavItem>
                <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Playlists</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Upload Song</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Logout</NavLink>
            </NavItem>
        </Nav>
    )
}

export default NavBar

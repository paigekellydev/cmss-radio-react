import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function NavBar(props) {
    const handleClick = (event) => {
        localStorage.clear()
    }

    const displayUsers = () => {
        if (props.authorized === true) {
            return (
                <li><img src="https://image.flaticon.com/icons/png/512/633/633781.png" alt=""/><a href="/users">View All Users</a></li>
            )
        }
    }
    return (

        <div className="action">
            
            <div className="menu">
                <h3>{localStorage.first_name + ' ' + localStorage.last_name}</h3>
                <ul>
                    <li><img src="https://image.flaticon.com/icons/png/512/618/618631.png" alt=""/><a href="/profile">My Profile</a></li>
                    {displayUsers()}
                    <li><img src="https://image.flaticon.com/icons/png/512/1159/1159633.png" alt=""/><a href="/profile">Edit Profile</a></li>
                    <li><img src="https://image.flaticon.com/icons/png/512/1159/1159633.png" alt=""/><a href="/profile">Discover Music</a></li>
                    <li><img src="https://image.flaticon.com/icons/png/512/1250/1250678.png" alt=""/><a onClick={handleClick} href="/">Logout</a></li>
                </ul>
            </div>
        </div>

        // <Nav>
        //     <NavItem>
        //         <NavLink href="/">Home</NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href="/playlists">Playlists</NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href="/profile">Profile</NavLink>
        //     </NavItem>
        //     <NavItem>
        //         <NavLink href="/login" onClick={handleClick}>Logout</NavLink>
        //     </NavItem>
        // </Nav>
    )
}

export default NavBar

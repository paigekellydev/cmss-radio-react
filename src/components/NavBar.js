import React, { useState }from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import ProtectedUsersButton from './ProtectedUsersButton';

function NavBar(props) {
    const handleClick = (event) => {
        localStorage.clear()
    }
    
    const displayUsers = () => {
        if (localStorage.authorized_user !== "false") {
            return (
                    <li>
                        <img src="https://i.imgur.com/jeUvrsa.png" alt=""/>
                        <a href="/users">View All Users</a>
                    </li>
            )
        }
    }
    const displayAddGenre = () => {
        if (localStorage.authorized_user) {
            return (
                <li>
                        <img src="https://i.imgur.com/RQPRX1X.png" alt=""/>
                        <a href="/add-genre">Add Genre</a>
                    </li>
            )
        }
    }
    
    const displayAddArtist = () => {
        if (localStorage.authorized_user) {
            return (
                <li>
                    <img src="https://i.imgur.com/RQPRX1X.png" alt=""/>
                    <a href="/add-artist">Add Artist</a>
                </li>
            )
        }
    }

    const displayAddSong = () => {
        if (localStorage.authorized_user) {
            return (
                <li>
                    <img src="https://i.imgur.com/RQPRX1X.png" alt=""/>
                    <a href="/add-song">Add Song</a>
                </li>
            )
        }
    }

    return (

        <div className="action">
            <div className="menu">
                <ul>
                    {/* <li>
                        <img src="https://i.imgur.com/CEXJZby.png" alt=""/>
                        <a href="/profile">My Profile</a>
                    </li>
                    <li>
                        <img src="https://i.imgur.com/uXKssFa.png" alt=""/>
                        <a href="/profile">Edit Profile</a>
                    </li> */}
                    <li>
                        <img src="https://i.imgur.com/o1lLeoo.png" alt=""/>
                        <a href="/">Discover Music</a>
                    </li>
                    {displayUsers()}
                    {/* {displayAddGenre()}
                    {displayAddArtist()}
                    {displayAddSong()} */}
                    <li>
                        <img src="https://i.imgur.com/5Luz861.png" alt=""/>
                        <a onClick={handleClick} href="/">Logout</a>
                    </li>
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

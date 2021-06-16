import React, { useState } from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import GenreMenu from '../containers/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../containers/PlaylistMenu'
import AdminDashboard from '../containers/AdminDashboard'
import ProtectedUsersButton from '../components/ProtectedUsersButton'
import Song from '../components/Song'
import SongList from '../containers/SongList'

export default function Home(props) {

    const [displayNavBar, setDisplayNavBar] = useState(false)

    const displayAdminDashboard = () => {
        if (props.user.authorized_user === true) {
            return <AdminDashboard />
        } else {
            return null
        }
    }

    const handleClick = (event) => {
        props.history.push('/profile')
    }
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

    // const displayUsers = () => {
    //     console.log(props.user)
    //     // if (props.user.authorized_user) {
    //     //     return <ProtectedUsersButton />
    //     // } else {
    //     //     return null
    //     // }
    // }
    return (
        <div>
            <header>
                <span>
                    <img className="logo" src="https://i.imgur.com/ey6gFFK.png" alt="" />
                </span>
                <span>
                    <p onClick={handleProfileClick}>{`${localStorage.first_name} ${localStorage.last_name}`}</p>
                </span>
            </header>
            <div className="home">
                <GenreMenu />
                <SongList />
            </div>
            {displayNav()}
            {/* <NavBar authorized={props.user.authorized_user} handleLogout={props.handleLogout} name={`${props.user.first_name} ${props.user.last_name}`}/> */}
            {/* {displayUsers()} */}
            {/* <PlaylistMenu /> */}
            {/* <ProtectedUsersButton /> */}
            {/* <AdminDashboard /> */}
            {displayAdminDashboard()}
            {/* <AddGenreForm /> */}
            {/* {displayOwnerDashboard()} */}
            {/* <button onClick={handleClick}>View Profile</button> */}
            <Song />
        </div>
    )
}

import React, { useState } from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import GenreMenu from '../containers/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../containers/PlaylistMenu'
import AdminDashboard from '../containers/AdminDashboard'
import ProtectedUsersButton from '../components/ProtectedUsersButton'
import Song from '../components/Song'
import SongList from '../containers/SongList'
const baseUrl = 'https://cmss-radio-api.herokuapp.com'

export default function Home(props) {

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

    return (
        <div>
            <section className="home">
                <GenreMenu />
                <SongList />
            </section>
            {displayAdminDashboard()}
            {/* <NavBar authorized={props.user.authorized_user} handleLogout={props.handleLogout} name={`${props.user.first_name} ${props.user.last_name}`}/> */}
            {/* {displayUsers()} */}
            {/* <PlaylistMenu /> */}
            {/* <ProtectedUsersButton /> */}
            {/* <AdminDashboard /> */}
            {/* <AddGenreForm /> */}
            {/* {displayOwnerDashboard()} */}
            {/* <button onClick={handleClick}>View Profile</button> */}
            {/* <Song /> */}
        </div>
    )
}

import React from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import GenreMenu from '../containers/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../containers/PlaylistMenu'
import AdminDashboard from '../containers/AdminDashboard'
import ProtectedUsersButton from '../components/ProtectedUsersButton'
import Song from '../components/Song'

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

    const displayUsers = () => {
        console.log(props.user)
        // if (props.user.authorized_user) {
        //     return <ProtectedUsersButton />
        // } else {
        //     return null
        // }
    }
    return (
        <div>
            <header>
                <h1>CMSS Radio</h1>
                <img className="logo" src="https://i.imgur.com/ey6gFFK.png" alt="" />
            </header>
            <NavBar authorized={props.user.authorized_user} handleLogout={props.handleLogout} name={`${props.user.first_name} ${props.user.last_name}`}/>
            <GenreMenu />
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

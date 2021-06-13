import React from 'react'
import AddGenreForm from '../components/AddGenreForm'
import GenreMenu from '../components/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../components/PlaylistMenu'
import OwnerDashboard from './OwnerDashboard'

export default function Home({user}) {

    const displayOwnerDashboard = () => {
        if (user.authorized_user === true) {
            return <OwnerDashboard />
        }
    }
    return (
        <div>
            <h1>Home Page</h1>
            {/* <NavBar /> */}
            <GenreMenu />
            <PlaylistMenu />
            {/* <AddGenreForm /> */}
            {displayOwnerDashboard()}
        </div>
    )
}

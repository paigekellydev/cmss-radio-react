import React from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import GenreMenu from '../containers/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../containers/PlaylistMenu'
import OwnerDashboard from '../containers/OwnerDashboard'

export default function Home(props) {

    // const displayOwnerDashboard = () => {
    //     if (props.user.authorized_user === true) {
    //         return <OwnerDashboard />
    //     }
    // }

    // const handleClick = (event) => {
    //     props.history.push('/profile')
    // }
    return (
        <div>
            <h1>Home Page</h1>
            <NavBar handleLogout={props.handleLogout}/>
            <GenreMenu />
            <PlaylistMenu />
            {/* <AddGenreForm /> */}
            {/* {displayOwnerDashboard()} */}
            {/* <button onClick={handleClick}>View Profile</button> */}
        </div>
    )
}

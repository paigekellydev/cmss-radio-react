import React from 'react'
import AddGenreForm from '../forms/AddGenreForm'
import GenreMenu from '../containers/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../containers/PlaylistMenu'
import OwnerDashboard from '../containers/OwnerDashboard'
import ProtectedUsersButton from '../components/ProtectedUsersButton'

export default function Home(props) {

    // const displayOwnerDashboard = () => {
    //     if (props.user.authorized_user === true) {
    //         return <OwnerDashboard />
    //     }
    // }

    // const handleClick = (event) => {
    //     props.history.push('/profile')
    // }

    const displayUsers = () => {
        console.log(props)
        // if (props.user.authorized_user) {
        //     return <ProtectedUsersButton />
        // } else {
        //     return null
        // }
    }
    return (
        <div>
            <h1>Home Page</h1>
            <NavBar handleLogout={props.handleLogout}/>
            <GenreMenu />
            <PlaylistMenu />
            <ProtectedUsersButton />
            {displayUsers()}
            {/* <AddGenreForm /> */}
            {/* {displayOwnerDashboard()} */}
            {/* <button onClick={handleClick}>View Profile</button> */}
        </div>
    )
}

import React from 'react'
import GenreMenu from '../components/GenreMenu'
import NavBar from '../components/NavBar'
import PlaylistMenu from '../components/PlaylistMenu'

export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <NavBar />
            <GenreMenu />
            <PlaylistMenu />
        </div>
    )
}

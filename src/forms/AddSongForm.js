import React, { useState } from 'react'

export default function AddSongForm() {

    const [title, setTitle] = useState('')
    const [artist_id, setArtistId] = useState('')
    const [genre_id, setGenreId] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://cmss-radio-api.herokuapp.com/songs', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify( 
                { song: {
                    title: {title},
                    artist_id: {artist_id},
                    genre_id: {genre_id}
                }})
        })
        .then(response => response.json())
        .then(newSong => console.log(newSong))
    }

    const handleSongChange = (event) => {
        setTitle(event.target.value)
    }
    const handleArtistChange = (event) => {
        setArtistId(event.target.value)
    }
    const handleGenreChange = (event) => {
        setGenreId(event.target.value)
    }

    const displayArtists = () => {
        const artists = [];

        return artists.map((artist) => {
            return (
                <option value={artist.id}>{artist.name}</option>
            )
        })
    }

    const displayGenres = () => {
        const genres = [];

        return genres.map((genre) => {
            return (
                <option value={genre.id}>{genre.name}</option>
            )
        })
    }

    return (
        <div>
            <h1>Add new song form</h1>
            <form className="form">
                <input type="text" placeholder="Song title" value={title} onChange={handleSongChange}/>
                <label>Select Artist</label>
                <select onChange={handleArtistChange}>
                    {displayArtists()}
                </select>
                <label>Select Genre</label>
                <select onChange={handleGenreChange}>
                    {displayGenres()}
                </select>
                <input type="button" value="Add artist"/>
            </form>
        </div>
    )
}





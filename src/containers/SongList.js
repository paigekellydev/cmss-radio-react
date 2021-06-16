import React, { useState, useEffect } from 'react'

export default function SongList() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/songs', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }

        })
            .then(resp => resp.json())
            .then(songs => setSongs(songs))
    })

    const displaySongs = () => {
        return songs.map((song) => {
            return (
                <div>
                    <audio src='https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media' controls ></audio>
                    <p>{song.title}</p>
                </div>
            )
    
        } )
    }
    return (
        <section className="song-list">
            <h4>Song List</h4>
            {displaySongs()}
        </section>
    )
}

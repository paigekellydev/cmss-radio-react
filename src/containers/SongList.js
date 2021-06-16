import React, { useState, useEffect } from 'react'

export default function SongList() {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch('https://cmss-radio-api.herokuapp.com/songs')
            .then(resp => resp.json())
            .then(songs => setSongs(songs))
    })

    const displaySongs = () => {
        return songs.map((song) => {
            return (
                <div>
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

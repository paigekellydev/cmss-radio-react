import React, { useState, useEffect } from 'react'
import Song from '../components/Song';

export default function SongList(props) {

    const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [song, setSong] = useState('');
    const [songArray, setSongArray] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {

        // setTimeout(() => {

        // })
        fetch(localStorage.song_fetch_url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(response => response.json())
            .then(results => {
                if (results.songs) {
                    setSongs(results.songs)
                } else {
                    setSongs(results)
                }
            })
    })

    const displaySongs = () => {
        // const songArray = []
        return songs.map((song) => {
            const songUrl = song.song_url
            return (
                <li key={song.id} song={song} onClick={e => setSong(songUrl)}>
                    <p>{song.title}</p>
                </li>
            )
        })
    }

    const nextSong = (event) => {
        if (songIndex === songs.length -1) {
            setSongIndex(0)
        } else {
            setSongIndex(songIndex + 1)
        }
       setSong(songs[songIndex].song_url)
    }

    const previousSong = (event) => {
        if (songIndex <= songs.length - 1 && songIndex !== 0) {
            setSongIndex(songIndex - 1)
        } else if (songIndex === 0) {
            setSongIndex(songs.length - 1)
        } else {
            setSongIndex(0)
        }
       setSong(songs[songIndex].song_url)
    }

    return (
        <section className="song-list">
            <h4>Song List</h4>
            <ul>
                {displaySongs()}
            </ul>
            <figure>
                <audio src={songs[songIndex].song_url} controls autoPlay>
                </audio>
                <button onClick={previousSong}>Previous</button>
                <button onClick={nextSong}>Next</button>
                {/* <button onClick={shuffleSongs}>Shuffle</button> */}
                <button>Loop</button>
            </figure>
            {/* <Song songs={songs}/> */}
        </section>
    )
}

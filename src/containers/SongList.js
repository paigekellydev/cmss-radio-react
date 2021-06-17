import React, { useState, useEffect } from 'react'

export default function SongList(props) {

    const [songs, setSongs] = useState([]);
    const [song, setSong] = useState('');

    useEffect(() => {

        if (localStorage.songList === null || localStorage.songList === 'https://cmss-radio-api.herokuapp.com/songs') {
            fetch(localStorage.songList, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                }
            })
                .then(response => response.json())
                .then(songs => setSongs(songs))
            } else {
                fetch(localStorage.songList, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`
                    }
                })
                .then(response => response.json())
                .then(genre => setSongs(genre.songs))
            }
    })


    const setSongUrl = (song) => {
        return song
    }

    // const handleClick = (event, songUrl) => {
    //     setSong(songUrl)
    //     console.log(song)
    // }

    const displaySongs = () => {
        return songs.map((song) => {
            const songUrl = song.song_url
            // console.log(songUrl)
            return (
                <li song={song} onClick={e => setSong(songUrl)}>
                    {/* <audio src='https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media' controls ></audio> */}
                    <p>{song.title}</p>
                </li>
            )
    
        } )
    }

    return (
        <section className="song-list">
            <h4>Song List</h4>
            <ul>
                {displaySongs()}
            </ul>
            <audio src={song} controls></audio>
        </section>
    )
}

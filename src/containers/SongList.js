import React, { useState, useEffect } from 'react'
import Song from '../components/Song';

export default function SongList(props) {

    const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [song, setSong] = useState('');
    const [songInfo, setSongInfo] = useState({});
    const [songArray, setSongArray] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)

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

    const playPauseButton = (songUrl) => {
        if (songUrl !== song || isPaused === true ) {
            return <button onClick={(event) => {
                setIsPaused(false)
                document.getElementById("audio").play()
            } }>Play</button>
        } else {
            return <button onClick={(event) => {
                // event.stopPropagation()
                setIsPaused(true)
                document.getElementById("audio").pause()
            } }>Pause</button>
        }
    }

    const displaySongs = () => {
        // const songArray = []
        return songs.map((song) => {
            const songUrl = song.song_url
            return (
                <li key={song.id}
                    onClick={e => {
                                setSong(songUrl);
                                setSongInfo(song)
                            }}>
                    <p>{song.title}</p>
                    <button onClick={e => console.log('fav')}>❤️</button>
                    {playPauseButton(songUrl)}
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
                <figcaption></figcaption>
                <audio id="audio" src={song} controls controlsList="nodownload" autoPlay>
                </audio>
                <button onClick={previousSong}>Previous</button>
                <button onClick={nextSong}>Next</button>
                {/* <button onClick={shuffleSongs}>Shuffle</button> */}
                {/* <button>Loop</button> */}
            </figure>
            {/* <Song songs={songs}/> */}
        </section>
    )
}

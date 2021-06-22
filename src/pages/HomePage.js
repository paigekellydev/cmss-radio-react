import React, { useState, useEffect } from 'react'
import GenreMenu from '../containers/GenreMenu'
import SongList from '../containers/SongList'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ProtectedUsersButton from '../components/ProtectedUsersButton';
const baseUrl = 'https://cmss-radio-api.herokuapp.com'

export default function Home(props) {

     const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [song, setSong] = useState('');
    const [songInfo, setSongInfo] = useState({});
    // const [songArray, setSongArray] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [displayFav, setDisplayFav] = useState(true)
    // const [currentFav, setFavSongs] = useState([])
    const [favSongs, setFavSongs] = useState([])

    useEffect(() => {
        fetch(localStorage.song_fetch_url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }, [])
            .then(response => response.json())
            .then(results => {
                if (results.songs) {
                    setSongs(results.songs)
                } else {
                    setSongs(results)
                }
            })
    })

    const handlePauseButton = (event, songUrl) => {
        if (isPaused === true ) {
                setIsPaused(false)
                event.target.src="https://i.imgur.com/3iuXw3H.png"
            } else {
                setIsPaused(true)
                event.target.src="https://i.imgur.com/3iuXw3H.png"

        }
    }

    const handleFavClick = (event, songInfo) => {
        event.stopPropagation()
        if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
            event.target.src = "https://i.imgur.com/kRCB5ua.png"
            console.log(songInfo)
        } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
            event.target.src = "https://i.imgur.com/2GlG8J6.png"
        }
    }

    const displaySongs = () => {
        return songs.map((song) => {
            const songUrl = song.song_url
            const songInfo = song
            return (
                <li className="song-li"
                    key={song.id}
                    onClick={e => {
                                setSong(songUrl);
                                setSongInfo(songs[songIndex])
                                document.getElementById(`clicked ${song.id}`).style.color = "#ff0000";
                            }}>
                    <span>
                        <img
                            className="icon"
                            src="https://i.imgur.com/2GlG8J6.png" 
                            alt="select as favorite"
                            // onClick={
                            //     (event) => {
                            //         event.stopPropagation()
                            //         if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
                            //             event.target.src = "https://i.imgur.com/kRCB5ua.png"
                            //             setFavSongs([...favSongs, song])
                            //         } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
                            //             event.target.src = "https://i.imgur.com/2GlG8J6.png"
                            //             const filtered = favSongs.filter(currentSong => currentSong.id === song.id)
                            //             console.log(filtered)
                            //         }
                            //         localStorage.setItem('favorite_songs', favSongs)
                            //     }

                            onClick={
                                (event) => {
                                    if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
                                        event.target.src = "https://i.imgur.com/kRCB5ua.png"
                                        setFavSongs([...favSongs, song])
                                    } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
                                        event.target.src = "https://i.imgur.com/2GlG8J6.png"
                                        const filtered = favSongs.filter(currentSong => currentSong.id === song.id)
                                        console.log(filtered)
                                    }
                                    localStorage.setItem('favorite_songs', favSongs)
                                }
                            }
                        />
                    </span>
                    <span>
                    <img
                        className="icon play-pause-button"
                        src="https://i.imgur.com/WmdtqRp.png"
                        alt="play-pause-button"
                        onClick={handlePauseButton} 
                    />
                    </span>
                    <span>
                        <p id={`clicked ${song.id}`}>{song.title}</p>
                    </span>
                    <br></br>
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
       setSongInfo(songs[songIndex])
    }

    const previousSong = (event) => {
        console.log({songInfo})
        if (songIndex <= songs.length - 1 && songIndex !== 0) {
            setSongIndex(songIndex - 1)
        } else if (songIndex === 0) {
            setSongIndex(songs.length - 1)
        } else {
            setSongIndex(0)
        }
       setSong(songs[songIndex].song_url)
       setSongInfo(songs[songIndex])
    }

    return (
        <div>
            <div className="home-container">
                <section className="song-list">
                    <h5>Song List</h5>
                    <ul>
                        {displaySongs()}
                    </ul>
                </section>
                <GenreMenu />
            </div>
            <div>
                <p>{`Playing ${songInfo.title} by ${songInfo.artist}`}</p>
            </div>
            <AudioPlayer
                id="audio-player"
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                src={song}
                onPlay={e => console.log({songInfo})}
                onClickPrevious={previousSong}
                onClickNext={nextSong}
            />
        </div>
    )
}

import React, { useState, useEffect } from 'react'
import Song from '../components/Song';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import {Container, Row, Col, Button} from 'react-bootstrap'

export default function SongList(props) {

    const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [song, setSong] = useState('');
    const [songInfo, setSongInfo] = useState({});
    // const [songArray, setSongArray] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [displayFav, setDisplayFav] = useState(true)

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

    // const handlePauseButton = (event, songUrl) => {
    //     if (songUrl !== song || isPaused === true ) {
    //             setIsPaused(false)
    //             document.getElementById("audio").play()
    //             event.target.src="https://i.imgur.com/3iuXw3H.png"
    //         } else {
    //             setIsPaused(true)
    //             document.getElementById("audio").pause()
    //             event.target.src="https://i.imgur.com/3iuXw3H.png"

    //     }
    // }
    const myAudio = document.getElementById("audio")
    const handlePauseButton = (event, songUrl) => {
        if (myAudio.duration > 0 && !myAudio.paused || songUrl === song && !isPaused) {
            myAudio.pause()
            setIsPaused(true)
            event.target.src="https://i.imgur.com/3iuXw3H.png"
        } else if (myAudio.duration > 0 && myAudio.paused || songUrl === song) {
            setIsPaused(false)
            document.getElementById("audio").play()
            event.target.src="https://i.imgur.com/CeQBhBy.png"
        }
    }

    const handleFavClick = (event) => {
        event.stopPropagation()
        if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
            event.target.src = "https://i.imgur.com/kRCB5ua.png"
        } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
            event.target.src = "https://i.imgur.com/2GlG8J6.png"
        }
    }

    // const favImg = () => {
    //     if (!displayFav) {
    //         return (
    //             <img 
    //                 src="https://i.imgur.com/2GlG8J6.png" 
    //                 alt="select as favorite"
    //                 onClick={e => {
    //                     e.target.src="https://i.imgur.com/kRCB5ua.png"} }
    //             />)
    //     } else {
    //         return (
    //             <img 
    //                 src="https://i.imgur.com/kRCB5ua.png" 
    //                 alt="deselect favorite"
    //                 onClick={e => setDisplayFav(false)}
    //             />)
    //     }
    // }

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
                    <img
                        className="icon"
                        src="https://i.imgur.com/2GlG8J6.png" 
                        alt="select as favorite"
                        onClick={handleFavClick}
                    />
                    <img
                        className="icon play-pause-button"
                        src="https://i.imgur.com/3iuXw3H.png"
                        alt="play-pause-button"
                        onClick={handlePauseButton} 
                    />
                    {/* {playPauseButton(songUrl)} */}
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
        console.log('next')
        if (songIndex <= songs.length - 1 && songIndex !== 0) {
            setSongIndex(songIndex - 1)
        } else if (songIndex === 0) {
            setSongIndex(songs.length - 1)
        } else {
            setSongIndex(0)
        }
       setSong(songs[songIndex].song_url)
    }

    const handlePlay = (event) => {
        if(myAudio.paused) {
            myAudio.play()
        }
    }

    return (
        <section className="song-list">
            <h4>Song List</h4>
            <ul>
                {displaySongs()}
            </ul>
            <figure>
                <figcaption></figcaption>

                <div> 
                    <button onClick={previousSong}>Previous</button>
                    <button onclick={handlePlay}>Play</button> 
                    {/* <button onclick={document.getElementById('audio').pause()}>Pause</button> 
                    <button onclick={document.getElementById('audio').volume += 0.1}>Vol +</button> 
                    <button onclick={document.getElementById('audio').volume -= 0.1}>Vol -</button>  */}
                    <button onClick={nextSong}>Next</button>
                    <AudioPlayer
                        id="audio-player"
                        // autoPlay
                        layout="stacked-reverse"
                        showSkipControls={true}
                        showJumpControls={false}
                        src={song}
                        onPlay={e => console.log("onPlay")}
                        onClickPrevious={previousSong}
                        onClickNext={nextSong}
                      />
                    {/* <img
                        className=""
                        src="https://i.imgur.com/3iuXw3H.png"
                        alt="next-button"
                        onClick={previousSong} 
                    />
                    <img
                        className=""
                        src="https://i.imgur.com/3iuXw3H.png"
                        alt="play-pause-button"
                        onClick={handlePauseButton} 
                    />
                    <img
                        className=""
                        src="https://i.imgur.com/3iuXw3H.png"
                        alt="next-button"
                        onClick={nextSong} 
                    /> */}
                </div>
                {/* <audio id="audio" src={song} controls autoPlay>
                </audio> */}
                {/* <button onClick={shuffleSongs}>Shuffle</button> */}
                {/* <button>Loop</button> */}
            </figure>
            {/* <Song songs={songs}/> */}
        </section>
    )
}

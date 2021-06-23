// import React, { useState, useEffect } from 'react'
// import GenreMenu from '../containers/GenreMenu'
// import SongList from '../containers/SongList'
// import AudioPlayer from 'react-h5-audio-player';
// import { Table } from 'react-bootstrap';
// import 'react-h5-audio-player/lib/styles.css';
// import ProtectedUsersButton from '../components/ProtectedUsersButton';
// import SongTable from '../components/SongTable';
// const baseUrl = 'https://cmss-radio-api.herokuapp.com'

// export default function Home(props) {

//     const [songs, setSongs] = useState([]);
//     const [songIndex, setSongIndex] = useState(0);
//     const [isPaused, setIsPaused] = useState(false)
//     const [song, setSong] = useState('https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media&token=a71e9224-b085-4f89-8eec-9384a48b27f7');
//     const [songTitle, setSongTitle] = useState('Case Shock')
//     const [songArtist, setSongArtist] = useState('Drift Diffusion')
//     const [genreTitle, setGenreTitle] = useState('All Songs')

//     useEffect(() => {
//         fetch(localStorage.song_fetch_url, {
//             method: 'GET',
//             headers: {
//                 Authorization: `Bearer ${localStorage.token}`
//             }
//         })
//             .then(response => response.json())
//             .then(results => {
//                 if (results.songs) {
//                     setSongs(results.songs)
//                 } else {
//                     setSongs(results)
//                 }
//             })
//     }, [])

//     const handlePauseButton = (event, title, artist, url) => {
//         if (isPaused === true ) {
//             setIsPaused(false)
//             event.target.src="https://i.imgur.com/3iuXw3H.png"
//         } else {
//             setIsPaused(true)
//             event.target.src="https://i.imgur.com/3iuXw3H.png"
//         }
//         setSongTitle(title)
//         setSongArtist(artist)
//         setSong(url);
//     }
        
//         // const handlePlayPauseButton = (event, title, artist, url) => {
//         //     if(url === song && !isPaused) {
//         //         setIsPaused(false)
//         //         event.target.src = "https://i.imgur.com/WmdtqRp.png"
//         //         // Audio.pause()
//         //     } else if (url === song && isPaused) {
//         //         event.target.src = "https://i.imgur.com/5btjNSX.png"
//         //     } else {
//         //         event.target.src = "https://i.imgur.com/5btjNSX.png"
//         //     }
//         //     setSongTitle(title)
//         //     setSongArtist(artist)
//         //     setSong(url);
//         // }

//     const displayGenre = () => {
//         if (!localStorage.getItem('genre')) {
//             return <h4>All Songs</h4>
//         } else {
//             return <h4>{localStorage.getItem('genre')}</h4>
//         }
//     }

//     const displaySongTable = () => {
//         return songs.map((song) => {
//             return (
//                 <SongTable
//                     key={song.id}
//                     song={song} 
//                     nextSong={nextSong} 
//                     previousSong={previousSong}
//                     handlePauseButton={handlePauseButton}
//                 />
//             )
//         })
//     }

//     const nextSong = (event) => {
//         if (songIndex === songs.length -1) {
//             setSongIndex(0)
//         } else {
//             setSongIndex(songIndex + 1)
//         }
//         setSong(songs[songIndex].song_url)
//         setSongTitle(songs[songIndex].title)
//         setSongArtist(songs[songIndex].artist.name)
//     }

//     const previousSong = (event) => {
//         if (songIndex <= songs.length - 1 && songIndex !== 0) {
//             setSongIndex(songIndex - 1)
//         } else if (songIndex === 0) {
//             setSongIndex(songs.length - 1)
//         } else {
//             setSongIndex(0)
//         }
//         setSong(songs[songIndex].song_url)
//         setSongTitle(songs[songIndex].title)
//         setSongArtist(songs[songIndex].artist.name)
//     }

//     return (
//         <div>
//             <div className="home-container">
//                 <section className="song-list">
//                     {displayGenre()}
//                     <Table striped bordered hover variant="dark">
//                         <thead>
//                             {/* <th>{localStorage.getItem('genre')}</th> */}
//                         </thead>
//                         {displaySongTable()}
//                     </Table>
//                 </section>
//                 <GenreMenu />
//             </div>
//             <div className="song-info-div">
//                 <p>{`Playing ${songTitle} by ${songArtist}`}</p>
//             </div>
//             <AudioPlayer
//                 id="audio-player"
//                 layout="stacked-reverse"
//                 showSkipControls={true}
//                 showJumpControls={false}
//                 src={song}
//                 onPlay={e => console.log({song})}
//                 onClickPrevious={previousSong}
//                 onClickNext={nextSong}
//             />
//         </div>
//     )
// }
import { Table } from 'react-bootstrap';

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
    const [songInfo, setSongInfo] = useState({})
    // const [songArray, setSongArray] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const [displayFav, setDisplayFav] = useState(true)
    // const [currentFav, setFavSongs] = useState([])
    const [favSongs, setFavSongs] = useState([])
    const [artist, setArtist] = useState({})
    const [artistId, setArtistId] = useState(1)
    const [songPath, setSongPath] = useState('/songs')

    const updateSongPath = newPath => setSongPath(newPath);

    useEffect(() => {
        fetch(baseUrl + songPath, {
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
    }, [songs])

    useEffect(() => {
        fetch(`https://cmss-radio-api.herokuapp.com/artists/${artistId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        }, [])
            .then(response => response.json())
            .then(results => {
                setArtist(results.name)
            })
    }, [artistId])

    const handlePauseButton = (event, songUrl) => {
        if (isPaused === true ) {
                setIsPaused(false)
                event.target.src="https://i.imgur.com/3iuXw3H.png"
            } else {
                setIsPaused(true)
                event.target.src="https://i.imgur.com/3iuXw3H.png"
        }
        setSong(songUrl);
                        setSongInfo(songs[songIndex])
                        setArtistId(songInfo.artist_id)
                        document.getElementById(`clicked ${song.id}`).style.color = "#ff0000";
    }

    const handleFavClick = (event, songInfo) => {
        event.stopPropagation()
        if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
            event.target.src = "https://i.imgur.com/kRCB5ua.png"
        } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
            event.target.src = "https://i.imgur.com/2GlG8J6.png"
        }
    }

    const displaySongs = () => {
        return songs.map((song) => {
            const songUrl = song.song_url
            return (
                <tbody>

                <tr className="song-li"
                    key={song.id}>
                    <td>
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
                    </td>
                    <td>
                    <img
                        className="icon play-pause-button"
                        src="https://i.imgur.com/WmdtqRp.png"
                        alt="play-pause-button"
                        onClick={event => {
                            if (isPaused === true ) {
                                setIsPaused(false)
                                event.target.src="https://i.imgur.com/3iuXw3H.png"
                            } else {
                                setIsPaused(true)
                                event.target.src="https://i.imgur.com/3iuXw3H.png"
                            }
                            setSong(songUrl);
                            setSongInfo(songs[songIndex])
                            // setArtistId(songs.artist_id)
                            document.getElementById(`clicked ${song.id}`).style.color = "rgb(233, 87, 87)";
                        }} 
                        />
                    </td>
                    <td>
                        <p id={`clicked ${song.id}`}>{song.title}</p>
                    </td>
                </tr>
            </tbody>
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
                    {/* <ul>
                        {displaySongs()}
                    </ul> */}
                    <Table striped bordered hover variant="dark">
                <thead>
                </thead>
                {displaySongs()}
                </Table>
                </section>
                <GenreMenu updateSongPath={updateSongPath} />
            </div>
            {/* <div>
                <p>{`Playing ${songInfo.title} by ${artist}`}</p>
            </div> */}
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

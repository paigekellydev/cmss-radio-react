import React, { useState, useEffect } from 'react'
import GenreMenu from '../containers/GenreMenu'
import SongList from '../containers/SongList'
import AudioPlayer from 'react-h5-audio-player';
import { Table } from 'react-bootstrap';
import 'react-h5-audio-player/lib/styles.css';
import ProtectedUsersButton from '../components/ProtectedUsersButton';
import SongTable from '../components/SongTable';
const baseUrl = 'https://cmss-radio-api.herokuapp.com'

export default function Home(props) {

    const [songs, setSongs] = useState([]);
    const [songIndex, setSongIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false)
    const [song, setSong] = useState('https://firebasestorage.googleapis.com/v0/b/cmss-radio.appspot.com/o/1.mp3?alt=media&token=a71e9224-b085-4f89-8eec-9384a48b27f7');
    const [songTitle, setSongTitle] = useState('Case Shock')
    const [songArtist, setSongArtist] = useState('Drift Diffusion')
    const [genreTitle, setGenreTitle] = useState('All Songs')

    useEffect(() => {
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
    }, [])

    const handlePlayPauseButton = (event, title, artist, url) => {
        setSongTitle(title)
        setSongArtist(artist)
        setSong(url);
        if(url === song && !isPaused) {
            event.target.src = "https://i.imgur.com/WmdtqRp.png"
            // Audio.pause()
        } else if (url === song && isPaused) {
            event.target.src = "https://i.imgur.com/5btjNSX.png"
        } else {
            event.target.src = "https://i.imgur.com/5btjNSX.png"
         }
    }

    const displayGenre = () => {
        if (!localStorage.getItem('genre')) {
            return <h4>All Songs</h4>
        } else {
            return <h4>{localStorage.getItem('genre')}</h4>
        }
    }

    const displaySongTable = () => {
        return songs.map((song) => {
            return (
                <SongTable
                    key={song.id}
                    song={song} 
                    nextSong={nextSong} 
                    previousSong={previousSong}
                    handlePlayPauseButton={handlePlayPauseButton}
                />
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
        setSongTitle(songs[songIndex].title)
        setSongArtist(songs[songIndex].artist.name)
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
        setSongTitle(songs[songIndex].title)
        setSongArtist(songs[songIndex].artist.name)
    }

    return (
        <div>
            <div className="home-container">
                <section className="song-list">
                    {displayGenre()}
                    <Table striped bordered hover variant="dark">
                        <thead>
                            {/* <th>{localStorage.getItem('genre')}</th> */}
                        </thead>
                        {displaySongTable()}
                    </Table>
                </section>
                <GenreMenu />
            </div>
            <div className="song-info-div">
                <p>{`Playing ${songTitle} by ${songArtist}`}</p>
            </div>
            <AudioPlayer
                id="audio-player"
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                src={song}
                onPlay={e => console.log({song})}
                onClickPrevious={previousSong}
                onClickNext={nextSong}
            />
        </div>
    )
}

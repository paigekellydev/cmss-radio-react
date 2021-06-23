import React from 'react'

export default function OldSongList() {

        const displaySongs = () => {
        return songs.map((song) => {
            const songUrl = song.song_url
            return (
                <li className="song-li"
                    key={song.id}
                    onClick={e => {
                        setSong(songUrl);
                        setSongInfo(songs[songIndex])
                        setArtist(songInfo.artist.name)
                        document.getElementById(`clicked ${song.id}`).style.color = "#ff0000";
                    }}
                    >
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
                                    console.log('heyee')
                                    if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
                                        event.target.src = "https://i.imgur.com/kRCB5ua.png"
                                        console.log("if")
                                        setFavSongs([...favSongs, song])
                                    } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
                                        console.log("else if")
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
                </li>
            )
        })
    }
    return (
        <div>
            {displaySongs()}
        </div>
    )
}

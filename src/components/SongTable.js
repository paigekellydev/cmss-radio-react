import React from 'react'
import { Table } from 'react-bootstrap';

export default function SongTable(props) {

    const handleFavClick = (event) => {
        event.stopPropagation()
        if (event.target.src === "https://i.imgur.com/2GlG8J6.png") {
            event.target.src = "https://i.imgur.com/kRCB5ua.png"
        } else if (event.target.src === "https://i.imgur.com/kRCB5ua.png") {
            event.target.src = "https://i.imgur.com/2GlG8J6.png"
        }
    }
    
    const handlePlayPause = (event) => {
        console.log(props.song)
        // props.handlePauseButton(
        //     event, 
        //     props.song.title, 
        //     props.song.artist.name, 
        //     props.song.song_url
        // )
        // // document.getElementById(`clicked ${props.song.id}`).style["boxShadow"] = "0 0 5px red"
        // document.getElementById(`clicked ${props.song.id}`).style["text-shadow"] = '1px 1px 3px red';
        // document.querySelector(`play-pause-button ${props.song.id}`).style["text-shadow"] = '1px 2px 3px red';

    }

    

    return (
        <tbody>
            <tr>
                <td>
                    <img
                        className="icon favorite"
                        src="https://i.imgur.com/2GlG8J6.png"
                        alt="play-pause-button"
                        onClick={handleFavClick} 
                        />
                </td>
                <td>
                    <img
                        className={`icon play-pause-button ${props.song.id}`}
                        src="https://i.imgur.com/WmdtqRp.png"
                        alt="play-pause-button"
                        onClick={handlePlayPause} 
                    />
                </td>
                <td id={`clicked ${props.song.id}`}>{props.song.title}</td>
            </tr>
        </tbody>
    )
}

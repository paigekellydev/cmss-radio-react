import React from 'react'

function GenreCard(props) {

    return (
        <div 
            onClick={_ => props.updateSongPath(`/genres/${props.genre.id}`)}
            className="genre-card" 
        >
            <img className="genre-image" src={props.image}/>
        </div>
    )
}

export default GenreCard

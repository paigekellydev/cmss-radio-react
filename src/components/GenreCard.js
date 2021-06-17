import React from 'react'

function GenreCard(props) {

    const handleClick = (event) => {
        props.handleGenreClick(event, props.genre.id)
    }

    return (
        <div onClick={handleClick}  className="genre-card" >
           <img src={props.image}/>
        </div>
        
    )
}

export default GenreCard

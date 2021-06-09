import React from 'react'

function GenreCard({genre}) {
    return (
        <div className="genre-card">
            <h3 className="genre-name">{genre.name}</h3>
            <img className="genre-img" src={genre.image}/>
        </div>
    )
}

export default GenreCard

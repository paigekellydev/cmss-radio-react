import React from 'react'

function GenreCard(props) {
    return (
        <div 
            className="genre-card" 
            style={{ backgroundImage: `url(${props.image})`}}
        >
           {/* {props.name} */}
        </div>
        
    )
}

export default GenreCard

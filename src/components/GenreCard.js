import React from 'react'

const baseUrl = 'https://cmss-radio-api.herokuapp.com'

function GenreCard(props) {

    return (
        <div 
            onClick={e => {
                    localStorage.setItem('song_fetch_url', `${baseUrl}/genres/${props.genre.id}`)
                    localStorage.setItem('genre', props.genre.name)
                } 
            }
            className="genre-card" 
        >
           <img className="genre-image" src={props.image}/>
        </div>
        
    )
}

export default GenreCard

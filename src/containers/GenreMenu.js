import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import GenreCard from '../components/GenreCard'

const baseUrl = 'https://cmss-radio-api.herokuapp.com'

export default function GenreMenu(props) {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/genres`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(response => response.json())
            .then(genres => setGenres(genres))
    }, [])
    
    // On click function to display user's favorite songs NEED TO CREATE ROUTE
    const handleFavoritesClick = (event) => {
        props.updateSongPath('/songs')
        // `${baseUrl}/users/${localStorage.user.id}`
    }
    
    // On click function to display all songs
    const handleAllClick= (event) => {
        props.updateSongPath('/songs')
        localStorage.setItem('genre', 'All Songs')
    }

    // Display genre cards with image
    const displayGenres = () => {
        return genres.map((genre) => {
            return <GenreCard setGenre={props.setGenre}key={genre.id} genre={genre} image={genre.img_url} updateSongPath={props.updateSongPath} />
        } )
    }

    return (
        <div className="genre-menu">
            <h3>Genre Menu</h3>
            <section className="genre-section">
                <div onClick={handleAllClick} className="genre-card all-songs" >
                    <img src='https://i.imgur.com/rcEzLex.png'/>
                </div>
                <div onClick={handleFavoritesClick} className="genre-card my-favorites">
                    <img src='https://i.imgur.com/Yhx2SSb.png'/>
                </div>
                {displayGenres()}
            </section>
        </div>
    )
}

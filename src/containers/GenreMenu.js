import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'
import GenreCard from '../components/GenreCard'

export default function GenreMenu() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('https://cmss-radio-api.herokuapp.com/genres', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
            }
        )
            .then(resp => resp.json())
            .then(genres => setGenres(genres))
    })

    const displayGenres = () => {
        return genres.map((genre) => {
            if(genre.id !== 8) {
                return <GenreCard key={genre.id} genre={genre} image={genre.img_url}/>
            }
        } )
    }

    return (
        <div className="genre-menu">
            <h3>Genre Menu</h3><br></br>
            <section className="genre-section">
                {displayGenres()}
            </section>
        </div>
    )
}

import React, { useState } from 'react'
import GenreCard from './GenreCard'

export default function AddGenreForm(props) {

    const [name, setName] = useState('')
    const [img_url, setImgUrl] = useState('https://i.imgur.com/DdxTzIo.png')

    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://cmss-radio-api.herokuapp.com/genres', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({genre: { name, img_url}})
        })
        .then(response => response.json())
        .then(newGenre => console.log(newGenre))
    }

    const handleChange = (event) => {
        setImgUrl(event.target.value)
    }

    const handleGenreChange = (event) => {
        setName(event.target.value)
    }

    const displayImageOptions = () => {
        const colors = [
            {
                color: "Red/Purple", 
                src: "https://i.imgur.com/DdxTzIo.png"
            },
            {
                color: "Orange/Yellow", 
                src: "https://i.imgur.com/7IIoHcB.png"
            },
            {
                color: "Yellow/Green", 
                src: "https://i.imgur.com/XtH2Cuh.png"
            },
            {
                color: "Green/Black", 
                src: "https://i.imgur.com/0dFWgM8.png"
            },
            {
                color: "Blue/Green", 
                src: "https://i.imgur.com/Yot6ddd.png"
            },
            {
                color: "Blue/Black", 
                src: "https://i.imgur.com/5ozgGg6.png"
            }
        ]

        return colors.map((color) => {
            return (
                <option value={color.src}>{color.color}</option>
            )
        }
        )
    }

    return (
        <div>
            <h1>Add new genre form</h1>
            <GenreCard name={name} image={img_url} key={1}/>
            <form className="form">
                <input type="text" placeholder="Genre name" value={name} onChange={handleGenreChange}/>
                <select onChange={handleChange}>
                    {displayImageOptions()}
                </select>
                <input type="submit" value="Add new genre"/>
            </form>
        </div>
    )
}





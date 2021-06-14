import React, { useState } from 'react'

export default function AddArtistForm() {

    const [name, setName] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://cmss-radio-api.herokuapp.com/artists', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify({artist: { name }})
        })
        .then(response => response.json())
        .then(newArtist => console.log(newArtist))
        
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <div>
            <h1>Add new Artist form</h1>
            <form className="form">
                <input type="text" placeholder="Artist name" value={name} onChange={handleChange}/>
                <input type="submit" value="Add new genre"/>
            </form>
        </div>
    )
}





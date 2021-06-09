import React, { useState } from 'react'

export default function SignUpForm(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('http:localhost:3000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({user: { username, password }})
        })
        .then(response => response.json())
        .then(newUser => console.log(newUser))

        props.login(event)
    }
    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    value={username}
                    placeholder="Enter username"
                    name="username"
                    type="text"
                    onChange={e => setUsername(e.target.value)} 
                    />
                <label>Password</label>
                <input
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    onChange={e => setPassword(e.target.value)} 
                />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

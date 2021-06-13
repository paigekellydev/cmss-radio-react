import React, { useState } from 'react'
import AddGenreForm from './AddGenreForm'

export default function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://cmss-radio-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: { username, password }})
        })
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    console.error(result.error)
                } else {
                    localStorage.setItem('token', result.token);
                    props.handleLogin()
                }
            })
    } 

    const handleClick = (event) => {
        props.selectSignUp()
    }

    return (
        <div className="login-form, form">
            {/* <img alt="" className="avatar" src="https://i.imgur.com/ejqejgu.png"></img> */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={username}
                    placeholder="Enter username"
                    name="username"
                    type="text"
                    onChange={e => setUsername(e.target.value)} 
                /> <br></br>
                <input
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    onChange={e => setPassword(e.target.value)} 
                /><br></br>
                <input className="submit-button" type="submit" value="Sign In"/>
                <a href='#' onClick={handleClick}>Don't have an account? Sign up!</a>
            </form>
        </div>
    );
}

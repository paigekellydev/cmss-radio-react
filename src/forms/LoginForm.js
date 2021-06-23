import React, { useState } from 'react'
import AddGenreForm from './AddGenreForm'
import { Link } from 'react-router-dom'
import Song from '../components/Song'

export default function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(username, password, props.history)
    }

    const handleClick = (event) => {
        props.selectSignUp()
    }

    return (
        <div className="login-form, form">
            {/* <img alt="" className="avatar" src="https://i.imgur.com/ejqejgu.png"></img> */}
            {/* <Song /> */}
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
                <p>
                    Don't have an account?
                    <Link to="/sign-up">  Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUpForm(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authorized_user, setAuthorizedUser] = useState('false')
    const [emailList, setEmailList] = useState('false')

    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.signUp(username, password, userEmail, firstName, lastName, authorized_user, props.history)

    }
    
    const handleInputChange = (event) => {
        setEmailList(true)
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    }

    return (
        <div className="form">
            {/* <img alt="" className="avatar" src="https://i.imgur.com/ejqejgu.png"></img> */}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    value={firstName}
                    placeholder="First name"
                    name="first_name"
                    type="text"
                    onChange={e => setFirstName(e.target.value)} 
                />
                <input 
                    value={lastName}
                    placeholder="Last name"
                    name="last_name"
                    type="text"
                    onChange={e => setLastName(e.target.value)} 
                />
                <input 
                    value={userEmail}
                    placeholder="Email"
                    name="email"
                    type="text"
                    onChange={e => setUserEmail(e.target.value)} 
                />
                <input 
                    value={username}
                    placeholder="Username"
                    name="username"
                    type="text"
                    onChange={e => setUsername(e.target.value)} 
                />
                <input
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    onChange={e => setPassword(e.target.value)} 
                />
                <label name="email_list">
                    Receive email updates from CMSS?
                </label>
                <input
                        name="email_list"
                        type="checkbox"
                        checked={emailList}
                        onChange={handleInputChange}
                />
                <input type="submit" value="Sign Up"/>
                <p>
                    Have an account?
                    <Link to="/login">  Login</Link>
                </p>
            </form>
        </div>
    )
}

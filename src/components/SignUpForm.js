import React, { useState } from 'react'

export default function SignUpForm(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [authorized_user, setAuthorizedUser] = useState('false')

    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch('https://cmss-radio-api.herokuapp.com/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(
                {user: 
                    { 
                        username, 
                        password,
                        email: userEmail, 
                        first_name: firstName, 
                        last_name: lastName,  
                        authorized_user
                    }
                }
            )
        })
        .then(response => response.json())
        .then(newUser => console.log(newUser))
        
        // props.login(event)
    }
    
    // const handleClick = (event) => {
    //     props.selectLogin()
    // }

    return (
        <div className="form">
            <img alt="" className="avatar" src="https://i.imgur.com/ejqejgu.png"></img>
            {/* <h2>Sign Up</h2> */}
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
                    name="username"
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
                    placeholder="Enter desired username"
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
                <input type="submit" value="Sign Up"/>
                {/* <a href='#' onClick={handleClick}>Have an account? Sign in here!</a> */}
            </form>
        </div>
    )
}

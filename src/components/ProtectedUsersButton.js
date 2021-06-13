import React from 'react'

export default function ProtectedUsersButton() {
    const handleClick = () => {
        fetch('https://cmss-radio-api.herokuapp.com/users', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(response => response.json())
            .then(result => console.log(result))
    }
    return (
        <button onClick={handleClick}>Get Users</button>
    )
}

import React, {useState, useEffect} from 'react'

export default function ProtectedUsersButton() {

    const [users, setUsers] = useState([]);


    useEffect(() =>{
        fetch('https://cmss-radio-api.herokuapp.com/users', {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
            .then(response => response.json())
            .then(result => setUsers(result))

    }, [])

    const displayUsers = () => {
        // console.log(users)
        return users.map((user) => {
            return (
                <p key={user.id}>{user.name}</p>
            )
        })
    }

    return (
        // <button onClick={handleClick}>Get Users</button>
        <div>
            {displayUsers()}
        </div>
    )
}

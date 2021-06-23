import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Table } from 'react-bootstrap';

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
        return users.map((user) => {
            return (
                <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.username}</td>
                    <td><a href={`mailto: ${user.email}`}>{user.email}</a></td>
                </tr>
            )
        })
    }

    return (
        // <button onClick={handleClick}>Get Users</button>
        <div className="users-menu">
            <h3>Users</h3>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {displayUsers()}
                </tbody>
            </Table>
        </div>
    )
}

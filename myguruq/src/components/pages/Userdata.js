import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../pages/Pagestyle.css";
import Userpostdata from './Userpostdata';

function Userdata() {

    const [users, setUsers] = useState([]);  // State to store the user data

    useEffect(() => {
        const response = axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response);
                setUsers(response.data)
            })


    }, [])

    return (
        <>
            {/* <Userpostdata /> */}
            <div className="user-table-container">


                <h1>Users List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>www.{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Userdata
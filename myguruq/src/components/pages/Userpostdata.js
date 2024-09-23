import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file
import axios from 'axios';


function Userpostdata() {
    const data = { fname: "", lname: "" };
    const [inputData, setInputData] = useState(data)

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
            .then((response) => {
                console.log(response)
            })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
            .then((response) => {
                console.log(response)
            })
    }

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1", inputData)
            .then((response) => {
                console.log(response)
            })
    }

    return (
        <>
            <h1>User Post Data</h1>
            <div className="registration-container">
                <h2>Register</h2>
                <form className="registration-form">
                    <div className="form-group">
                        <br />
                        <input
                            type="text"
                            name="fname"
                            value={inputData.fname}
                            onChange={handleData}
                            required
                            placeholder="Enter your First name"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="lname"
                            value={inputData.lname}
                            onChange={handleData}
                            required
                            placeholder="Enter your Last Name"
                        />
                    </div>





                    <button onClick={handleSubmit} className="submit-btn">
                        Submit Data
                    </button> <br />
                    <button onClick={handleUpdate} className="submit-btn">
                        Update Data
                    </button><br />
                    <button onClick={handleDelete} className="submit-btn">
                        Delete Data
                    </button><br />

                </form>


            </div>
        </>
    )
}

export default Userpostdata
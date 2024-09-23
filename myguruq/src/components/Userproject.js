import React, { useState } from 'react';
import axios from 'axios';

import "./pages/Pagestyle.css"

function Userproject() {

    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [uploadedFilePath, setUploadedFilePath] = useState(''); // State to hold the uploaded file URL

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a PDF file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setMessage(`File uploaded successfully: ${res.data.fileName}`);
            setUploadedFilePath(`http://localhost:5000${res.data.filePath}`); // Store the uploaded file path
        } catch (err) {
            console.error(err);
            setMessage('Error uploading file');
        }
    };

    return (
        <>



            <div className="pdf-upload-form">
                <h2>Upload PDF File</h2>
                <form onSubmit={handleUpload}>
                    <input type="file" onChange={handleFileChange} accept="application/pdf" />
                    <button type="submit">Upload</button>
                </form>
                {message && <p>{message}</p>}

                {/* Show the uploaded file if it exists */}
                {uploadedFilePath && (
                    <div>
                        <h3>Uploaded File:</h3>
                        <a href={uploadedFilePath} target="_blank" rel="noopener noreferrer">
                            View Uploaded PDF
                        </a>
                    </div>
                )}
            </div>




        </>
    )
}

export default Userproject
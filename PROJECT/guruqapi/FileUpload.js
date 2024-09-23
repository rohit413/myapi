import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

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
        } catch (err) {
            console.error(err);
            setMessage('Error uploading file');
        }
    };

    return (
        <div>
            <h2>Upload PDF File</h2>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} accept="application/pdf" />
                <button type="submit">Upload</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;

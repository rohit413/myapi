
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import "../pages/Pagestyle.css";


const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 40.73061,  // Set latitude
    lng: -73.935242 // Set longitude
};

const Contact = () => {
    // State to handle form input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // Add your form submission logic here (e.g., API calls)
        alert('Form submitted successfully!');
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
                We'd love to hear from you! Fill out the form below, or find us at the location marked on the map.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your Message"
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>

            {submitted && (
                <div className="submission-message">
                    Thank you for reaching out! We'll get back to you soon.
                </div>
            )}

            {/* Google Maps Component */}
            <div className="map-container">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                    >
                        {/* Marker for the location */}
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Contact;

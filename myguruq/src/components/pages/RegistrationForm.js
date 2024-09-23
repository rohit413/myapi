import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file

function RegistrationForm() {
    // State to manage form input
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [submitted, setSubmitted] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        // You can add validation or API call here
        if (formData.password === formData.confirmPassword) {
            console.log('Registration successful', formData);
            alert('Registration successful!');
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder="Confirm your password"
                    />
                </div>

                <button type="submit" className="submit-btn">
                    Register
                </button>
            </form>

            {submitted && (
                <div className="submission-message">
                    {formData.password === formData.confirmPassword
                        ? 'Form submitted successfully!'
                        : 'Passwords do not match!'}
                </div>
            )}
        </div>
    );
}

export default RegistrationForm
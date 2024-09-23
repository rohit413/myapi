import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>
                        We are dedicated to providing the best services to help you grow your business.
                        Get in touch with us to know more.
                    </p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
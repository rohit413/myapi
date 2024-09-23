import React from 'react';
import "../pages/Pagestyle.css";
import { Fade } from 'react-awesome-reveal'; // Using react-awesome-reveal for animations



const teamMembers = [
    {
        id: 1,
        name: 'Alice Johnson',
        position: 'CEO & Founder',
        bio: 'Alice leads our team with a vision for excellence and innovation in education.',
        photo: 'https://picsum.photos/seed/picsum/150'
    },
    {
        id: 2,
        name: 'Bob Smith',
        position: 'Lead Developer',
        bio: 'Bob brings technical expertise and a passion for developing cutting-edge solutions.',
        photo: 'https://picsum.photos/seed/picsum/150'
    },
    {
        id: 3,
        name: 'Carol White',
        position: 'Creative Director',
        bio: 'Carol’s creativity drives our content and designs, ensuring engaging and effective learning experiences.',
        photo: 'https://picsum.photos/seed/picsum/150'
    }
];


function About() {
    return (
        <div className="about-container">
            {/* Introduction Section */}
            <section className="introduction-section">
                <Fade>
                    <h1>About Us</h1>
                    <p>We are dedicated to providing the best educational experiences and resources to help you succeed.</p>
                </Fade>
            </section>

            {/* Our Mission Section */}
            <section className="mission-section">
                <Fade direction="up">
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower learners through innovative and high-quality education that fosters growth and success.</p>
                </Fade>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <Fade direction="left">
                    <h2>Meet Our Team</h2>
                    <div className="team-grid">
                        {teamMembers.map(member => (
                            <div key={member.id} className="team-member-card">
                                <img src={member.photo} alt={member.name} className="team-photo" />
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </Fade>
            </section>

            {/* Contact Us Section */}
            <section className="contact-section">
                <Fade direction="right">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need more information, feel free to reach out to us.</p>
                    <a href="/contact" className="contact-link">Get in Touch</a>
                </Fade>
            </section>
        </div>
    );
}

export default About
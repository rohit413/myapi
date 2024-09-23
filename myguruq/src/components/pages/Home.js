import React, { createContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const coursesData = [
    {
        id: 1,
        title: 'Web Development Bootcamp',
        description: 'Learn HTML, CSS, JavaScript, and more to build modern, responsive websites.',
        icon: '🌐',
        link: '/courses/web-development'
    },
    {
        id: 2,
        title: 'Data Science & AI',
        description: 'Master Python, machine learning, and AI tools to dive into the world of data science.',
        icon: '📊',
        link: '/courses/data-science'
    },
    {
        id: 3,
        title: 'Graphic Design',
        description: 'Develop your creative skills and learn how to create stunning visuals using Photoshop and Illustrator.',
        icon: '🎨',
        link: '/courses/graphic-design'
    }
];

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        feedback: 'The Web Development Bootcamp was an incredible experience! I went from zero to job-ready in just a few months.',
        course: 'Web Development Bootcamp'
    },
    {
        id: 2,
        name: 'Sarah Smith',
        feedback: 'The Data Science course was challenging but rewarding. I now feel confident applying for data science roles.',
        course: 'Data Science & AI'
    }
];

function Home() {
    // const arr1 = [3, 2, 4, 6, 7, 1];

    // const arr1res = arr1.map((res) => {
    //     console.log(res);
    // })



    return (
        <div className="home-container">



            {/* Hero Section */}
            <section className="hero-section">
                <h1>Empowering You with Knowledge</h1>
                <p>Learn the skills you need to succeed in today's digital world.</p>
                <Link to="/courses" className="cta-btn">Explore Courses</Link>
            </section>

            {/* Courses Section */}
            <section className="courses-section">
                <h2>Popular Courses</h2>
                <p>Our courses are designed to help you master the latest skills in the tech and design industries.</p>

                <div className="courses-grid">
                    {coursesData.map(course => (
                        <div key={course.id} className="course-card">
                            <div className="icon">{course.icon}</div>
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                            <Link to={course.link} className="course-link">Learn More</Link>

                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Students Say</h2>

                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <p>"{testimonial.feedback}"</p>
                            <h4>{testimonial.name}</h4>
                            <small>{testimonial.course}</small>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Join Thousands of Happy Students</h2>
                <p>Start learning today and achieve your career goals with our industry-leading courses.</p>
                <Link to="/register" className="cta-btn">Get Started</Link>
            </section>
        </div>
    );
}

export default Home;

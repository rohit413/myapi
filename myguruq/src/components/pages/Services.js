import React from 'react'
import "../pages/Pagestyle.css"


const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        description: 'We build responsive and dynamic websites tailored to your needs, using the latest web technologies like React, Node.js, and more.',
        icon: '🌐'
    },
    {
        id: 2,
        title: 'Mobile App Development',
        description: 'Our team develops high-quality mobile applications for both Android and iOS platforms using native and cross-platform solutions.',
        icon: '📱'
    },
    {
        id: 3,
        title: 'UI/UX Design',
        description: 'We create intuitive and engaging user interfaces that offer the best user experience across devices.',
        icon: '🎨'
    },
    {
        id: 4,
        title: 'Digital Marketing',
        description: 'Grow your business with our digital marketing services, including SEO, SEM, social media marketing, and email campaigns.',
        icon: '📈'
    }
];





function Services() {
    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>We offer a wide range of services to help you grow your business and meet your goals.</p>

            <div className="services-grid">
                {servicesData.map(service => (
                    <div key={service.id} className="service-card">
                        <div className="icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services
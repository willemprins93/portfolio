import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
        <div className="contact-card">
            <a href="https://github.com/willemprins93" className="detail-card">
                <img className="contact-icon" src='/icons/github.png' />
                <p className="detail-text">Github</p>
            </a>
            <a href="https://www.linkedin.com/in/willem-prins-dev/" className="detail-card">
                <img className="contact-icon" src='/icons/linkedin.png' />
                <p className="detail-text">LinkedIn</p>
            </a>
            <a href="mailto: willemprins93@gmail.com" className="detail-card">
                <img className="contact-icon" src='/icons/email.png' />
                <p className="detail-text">Email</p>
            </a>
            <a href="tel: 0031621850338" className="detail-card">
                <img className="contact-icon" src='/icons/phone-call.png' />
                <p className="detail-text">Phone</p>
            </a>
        </div>
        </>
    )
}

export default Contact

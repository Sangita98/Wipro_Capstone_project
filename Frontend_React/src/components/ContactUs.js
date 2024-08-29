// import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
        <div id='form'>
        {/* <h1 className="head">Feel Free to Contact Us anytime!</h1> */}
        <div className="contact-container">
            <h1 >Contact Us</h1>
            <div className="contact-details">
                <div className="contact-item">
                    <FaEnvelope className="contact-icon" />
                    <ul className="contact-list">
                        <li>wellnessinitiative@gmail.com</li>
                        <li>wellnessprogram@gmail.com</li>
                        <li>wellnessservices@gamil.com</li>
                    </ul>
                </div>
                <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <ul className="contact-list">
                        <li>+91 814 758 0126</li>
                        <li>+91 315 724 9330</li>
                        <li>+91 808 523 6190</li>
                    </ul>
                </div>
                <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>123 SandalTown St,25th Avenue, DholakPur, India </p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default ContactUs;
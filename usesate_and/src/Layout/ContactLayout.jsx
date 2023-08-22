import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactLayout.css";

const ContactLayout = () => {
    return (
        <>
            <h1>Contact Us</h1>
            <nav>
                <NavLink to="/faq" activeClassName="active">FAQ</NavLink>
                <NavLink to="/help" activeClassName="active">Help</NavLink>
            </nav> 

            <div className="additional-content">
                <h2>Still Have Questions?</h2>
                <p>
                    If you couldn't find answers to your questions in our FAQ or Help sections, feel free to get in touch with our support team. We're here to assist you 24/7.
                </p>

                <div className="contact-details">
                    <p><strong>Email:</strong> <a href="mailto:contact@logaxp.com">contact@logaxp.com</a></p>
                    <p><strong>Customer Service:</strong> +1-800-123-4567</p>
                </div>

                <button>Contact Us</button>
                
                <div className="social-media-links">
                    <p><strong>Follow Us:</strong></p>
                    <a href="#!" target="_blank" rel="noopener noreferrer">Facebook</a> |
                    <a href="#!" target="_blank" rel="noopener noreferrer">Twitter</a> |
                    <a href="#!" target="_blank" rel="noopener noreferrer">Instagram</a> |
                    <a href="#!" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <p className="address">
                    <strong>Address:</strong> 123 LogoXP Street, Music City, 10001
                </p>
            </div>
        </>
    );
}

export default ContactLayout;


import React from 'react';
import './Help.css';

const Help = () => {
    return (
        <div className="help-page">
            <h1>How Can We Help You?</h1>
            <section className="help-section">
                <h2>Getting Started</h2>
                <p>For new users, check out our guide on how to get started and make the most of our platform.</p>
                <a href="/getstarted">Getting Started Guide</a>
            </section>
            
            <section className="help-section">
                <h2>FAQ</h2>
                <p>Common questions and answers to help you navigate our platform.</p>
                <a href="/faq">Go to FAQ</a>
            </section>
            
            <section className="help-section">
                <h2>Contact Support</h2>
                <p>If you can't find the answers you're looking for, our support team is here to assist you.</p>
                <a href="/contact">Contact Us</a>
            </section>
        </div>
    );
}

export default Help;


import React from 'react';
import './Faq.css';


const Faq = () => {
    const questionsAndAnswers = [
        {
            question: "How do I reset my password?",
            answer: "Go to account settings, click on 'Change Password', and follow the instructions.",
            readMore: "https://www.edureka.co"
        },
        {
            question: "Where can I view my purchase history?",
            answer: "Your purchase history can be found in the 'Orders' section of your account.",
            readMore: "https://www.edureka.co"
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our customer support team through the 'Contact' page or by emailing support@logaxp.com.",
            readMore: "https://www.edureka.co"

        },
        {
            question: "How do I cancel my subscription?",
            answer: "You can cancel your subscription through the 'Billing' section of your account.",
            readMore: "https://www.edureka.co"
        },
        {
            question: "How do I change my username?",
            answer: "You can change your username in the 'Account' section of your account.",
            readMore: "https://www.edureka.co"
        }
    ];

    return (
        <div className="faq-page">
            <h1>Frequently Asked Questions</h1>
            <ul>
                {questionsAndAnswers.map((item, index) => (
                    <li key={index}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                        <a href={item.readMore} className="read-more-link">Read More</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Faq;


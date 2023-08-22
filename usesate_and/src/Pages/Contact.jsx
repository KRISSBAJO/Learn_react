import React from 'react';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, please don't hesitate to reach out. We'd love to hear from you!</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Address:</strong> 1234 Elm Street, Springfield</p>
      </div>
      
      {/* Optional: Contact Form */}
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" />
          </div>
          
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>
          
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

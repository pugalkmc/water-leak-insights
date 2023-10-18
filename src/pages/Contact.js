import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please feel free to reach out to us.</p>
      <div>
        <h2>Contact Information</h2>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: +1 123-456-7890</li>
        </ul>
      </div>
      <div>
        <h2>Contact Form</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="4" placeholder="Your message" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

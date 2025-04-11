import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    // Send email using EmailJS
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({ submitting: false, submitted: true, error: null });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        setFormStatus({ 
          submitting: false, 
          submitted: false, 
          error: 'Failed to send message. Please try again later.' 
        });
      });
  };

  return (
    <div className="contact-container">
      <h2 className="section-title" data-aos="fade-up">Contact Me</h2>
      
      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right">
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <h4>Location</h4>
              <p>Hyderabad, India</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+91 9392361766</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <h4>Email</h4>
              <p>ksushanth9030@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container" data-aos="fade-left">
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
              <div className="form-success">
                Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}
            
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Your Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="subject">Subject</label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
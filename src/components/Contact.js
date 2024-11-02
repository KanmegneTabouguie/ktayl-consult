// src/components/Contact.js
import React, { useState } from 'react';
import { Button, Spinner, Alert, Form, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to assemble the email address
  const getEmail = () => {
    const user = "ktaylconsult";
    const domain = "gmail";
    const tld = "com";
    return `${user}@${domain}.${tld}`;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Assemble the mailto link
    const email = getEmail();
    const subject = encodeURIComponent(`New message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Open the user's default email client with the pre-filled email
    window.location.href = mailtoLink;

    // Since mailto: doesn't provide feedback, we'll simulate submission success
    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form
    setFormData({ name: '', email: '', message: '' });

    // Remove the success message after a few seconds
    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Get in Touch</h2>
        <Row>
          {/* Contact Information */}
          <Col lg={5} md={6} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="d-flex flex-column justify-content-center align-items-start">
                <h5 className="mb-4">Contact Information</h5>
                <div className="mb-3 d-flex align-items-center">
                  <FaEnvelope size={20} className="me-3 text-primary" />
                  <a href={`mailto:${getEmail()}`} className="text-decoration-none text-dark">
                    {getEmail()}
                  </a>
                </div>
                {/* 
                <div className="mb-3 d-flex align-items-center">
                  <FaPhone size={20} className="me-3 text-primary" />
                  <a href="tel:+12345678901" className="text-decoration-none text-dark">
                    +1 (234) 567-8901
                  </a>
                </div> 
                */}
                <div className="mt-4">
                  <h6 className="mb-2">Follow Us</h6>
                  <div className="d-flex">
                    <a 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="LinkedIn"
                      className="text-primary me-3"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="GitHub"
                      className="text-primary me-3"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href="https://youtube.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="YouTube"
                      className="text-primary me-3"
                    >
                      <FaYoutube size={24} />
                    </a>
                    <a 
                      href="https://instagram.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Instagram"
                      className="text-primary me-3"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a 
                      href="https://tiktok.com/@yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="TikTok"
                      className="text-primary"
                    >
                      <FaTiktok size={24} />
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Contact Form */}
          <Col lg={7} md={6}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <Form.Group controlId="name" className="mb-3">
                    <Form.Label>
                      Name <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      name="name" 
                      placeholder="Enter your name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>

                  {/* Email Field */}
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>
                      Email <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>

                  {/* Message Field */}
                  <Form.Group controlId="message" className="mb-4">
                    <Form.Label>
                      Message <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      name="message" 
                      rows={5} 
                      placeholder="Enter your message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <Button variant="primary" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Spinner 
                            as="span" 
                            animation="border" 
                            size="sm" 
                            role="status" 
                            aria-hidden="true" 
                            className="me-2"
                          />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </Form>

                {/* Submission Status */}
                {submitStatus === 'success' && (
                  <Alert variant="success" className="mt-4">
                    Your message has been prepared in your email client. Please review and send it.
                  </Alert>
                )}
                {submitStatus === 'error' && (
                  <Alert variant="danger" className="mt-4">
                    Please fill in all required fields.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;

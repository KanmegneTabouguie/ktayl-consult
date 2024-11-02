// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2>About Ktayl-Consult</h2>
        <div className="about-content">
          <p>
            Welcome to <span className="highlight">Ktayl-Consult</span>! I am your dedicated partner in driving innovation, efficiency, and growth through technology. With a comprehensive background in digital transformation, web and mobile development, DevOps, machine learning, automation, AI, cloud infrastructure, and data analytics, I offer tailored consulting services for modern businesses.
          </p>
        </div>

        {/* Mission */}
        <div className="section-box mission">
          <h4>Our Mission</h4>
          <p>
            At Ktayl-Consult, Our mission is to empower businesses to achieve their full potential by leveraging innovative technology and delivering scalable, future-ready solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="section-box vision">
          <h4>Our Vision</h4>
          <p>
            To be the trusted advisor for businesses navigating digital transformation, ensuring they stay ahead in an evolving tech landscape.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="section-box competencies">
          <h4>Core Competencies</h4>
          <ul>
            <li>Digital Transformation Strategy</li>
            <li>Web and Mobile Development</li>
            <li>DevOps & DevSecOps</li>
            <li>Machine Learning & AI</li>
            <li>Automation & Generative AI</li>
            <li>Cloud-Native Development & Infrastructure</li>
            <li>Data Analytics & Visualization</li>
          </ul>
        </div>

        {/* Core Values */}
        <div className="section-box values">
          <h4>Core Values</h4>
          <ul>
            <li><strong>Holistic Approach:</strong> Providing comprehensive, interconnected solutions that transform your business.</li>
            <li><strong>Client-Centric Solutions:</strong> Tailoring services to meet unique requirements, delivering value on your terms.</li>
            <li><strong>Innovation & Security:</strong> Offering solutions that are both innovative and secure, leveraging the latest technologies.</li>
            <li><strong>Results-Driven:</strong> Focusing on delivering outcomes that align with business goals.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="call-to-action">
          <h3>Ready to Transform Your Business?</h3>
          <p>Let’s discuss how Ktayl-Consult can be your partner in digital transformation.</p>
          <a href="mailto:ktaylconsult@gmail.com" className="btn btn-primary">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

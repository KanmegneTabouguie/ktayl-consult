// src/components/Services.js
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <Accordion defaultActiveKey="0" id="servicesAccordion">
          {/* Web and Mobile Development Consulting */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Web and Mobile Development Consulting</Accordion.Header>
            <Accordion.Body>
              <p>Providing cutting-edge solutions across multiple technology domains including:</p>
              <ul>
                <li><strong>Web Development</strong>: Frontend and backend development using modern frameworks and languages.</li>
                <li><strong>Mobile App Development</strong>: Cross-platform and native app development for iOS and Android.</li>
                <li><strong>DevOps & DevSecOps</strong>: Implementing CI/CD pipelines, containerization, and secure development practices.</li>
                <li><strong>Machine Learning & AI</strong>: Developing AI-driven applications and integrating machine learning models.</li>
                <li><strong>Automation & Generative AI</strong>: Streamlining business processes and leveraging generative technologies for innovative solutions.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* Additional Services */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Cloud Computing Solutions</Accordion.Header>
            <Accordion.Body>
              <p>Offering scalable and secure cloud solutions to optimize your business operations.</p>
              <ul>
                <li><strong>Cloud Architecture Design</strong>: Crafting robust cloud infrastructures tailored to your needs.</li>
                <li><strong>Migration Services</strong>: Seamlessly migrating your existing systems to the cloud.</li>
                <li><strong>Cloud Security</strong>: Implementing advanced security measures to protect your data.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Data Analytics and Visualization</Accordion.Header>
            <Accordion.Body>
              <p>Transforming raw data into actionable insights through advanced analytics and visualization tools.</p>
              <ul>
                <li><strong>Data Warehousing</strong>: Building centralized repositories for your data.</li>
                <li><strong>Business Intelligence</strong>: Leveraging BI tools to drive informed decision-making.</li>
                <li><strong>Custom Dashboards</strong>: Creating interactive dashboards for real-time data monitoring.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default Services;

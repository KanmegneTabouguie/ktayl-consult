// src/components/Services.js
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <Accordion defaultActiveKey="0" id="servicesAccordion">
          {/* 1. Digital Transformation */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Digital Transformation</Accordion.Header>
            <Accordion.Body>
              <p>Empowering your business to excel in a digital-first world with tailored transformation strategies.</p>
              <ul>
                <li><strong>Digital Transformation Strategy:</strong> Assess workflows, develop roadmaps, select technologies, and manage change to embed technology meaningfully into your operations.</li>
                <li><strong>Business Process Digitalization:</strong> Automate business processes to improve productivity and reduce errors.</li>
                <li><strong>Legacy System Modernization:</strong> Modernize outdated systems to enhance flexibility and reduce maintenance costs.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Our holistic approach ensures sustained growth by integrating advanced technologies into your core operations.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 2. Development Services */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Development Services</Accordion.Header>
            <Accordion.Body>
              <p>Comprehensive development solutions to create responsive, scalable, and user-friendly applications.</p>
              <ul>
                <li><strong>Web Development:</strong> Develop responsive web applications using modern frameworks like React, Angular, and Vue.js, with robust backends in Django, Node.js, and more.</li>
                <li><strong>Mobile App Development:</strong> Create cross-platform and native mobile applications for iOS and Android using React Native, Flutter, Swift, and Kotlin.</li>
                <li><strong>UX/UI Development:</strong> Design user-centered interfaces to enhance usability and engagement across all platforms.</li>
                <li><strong>No-Code/Low-Code Development:</strong> Implement quick, cost-effective applications using platforms like Power Apps and Bubble.</li>
                <li><strong>API Development and System Integration:</strong> Develop RESTful and GraphQL APIs to ensure seamless data exchange and system interoperability.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Our development services ensure your digital presence is engaging, scalable, and tailored to your business needs.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 3. Cloud Solutions */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Cloud Solutions</Accordion.Header>
            <Accordion.Body>
              <p>Modernize and scale your infrastructure with flexible, cost-effective cloud solutions.</p>
              <ul>
                <li><strong>Cloud-Native Application Development:</strong> Design applications optimized for the cloud using microservices and serverless architectures.</li>
                <li><strong>Cloud Solutions & Infrastructure Optimization:</strong> Optimize your cloud infrastructure to reduce costs and improve performance with services like AWS, Google Cloud, and Azure.</li>
                <li><strong>SaaS Integration and Building SaaS Personalize:</strong> Implement and customize SaaS solutions for streamlined operations and centralized data management.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Our cloud expertise provides scalability, resilience, and cost savings, ensuring your infrastructure meets evolving business demands.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 4. DevOps & Agile Management */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>DevOps & Agile Management</Accordion.Header>
            <Accordion.Body>
              <p>Enhance efficiency and collaboration with streamlined development and project management practices.</p>
              <ul>
                <li><strong>DevOps:</strong> Implement CI/CD pipelines, containerization with Docker and Kubernetes, and Infrastructure as Code using Terraform and AWS CloudFormation.</li>
                <li><strong>DevSecOps:</strong> Integrate security protocols within every development phase to ensure compliance and reduce risks.</li>
                <li><strong>Agile Project Management:</strong> Lead projects with Scrum frameworks, sprint planning, and KPI tracking for timely and flexible delivery.</li>
              </ul>
              <p><strong>Why This Matters:</strong> DevOps and Agile methodologies enhance operational efficiency, reliability, and adaptability in your projects.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 5. AI & Automation */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>AI & Automation</Accordion.Header>
            <Accordion.Body>
              <p>Leverage artificial intelligence and automation to drive innovation and efficiency in your business operations.</p>
              <ul>
                <li><strong>Machine Learning:</strong> Develop AI-driven solutions like recommendation systems and predictive analytics using frameworks like TensorFlow and PyTorch.</li>
                <li><strong>Artificial Intelligence and Generative AI:</strong> Create intelligent applications such as chatbots and generative models to enhance productivity and engagement.</li>
                <li><strong>Automation:</strong> Automate repetitive tasks with scripting (Python, Bash) and RPA tools like UiPath and Blue Prism.</li>
                <li><strong>Chatbot and Virtual Assistant Development:</strong> Develop AI-based chatbots for improved customer support and interaction using platforms like Dialogflow.</li>
              </ul>
              <p><strong>Why This Matters:</strong> AI and automation drive efficiency, reduce workloads, and enable innovative solutions to meet business needs.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 6. Data Services */}
          <Accordion.Item eventKey="5">
            <Accordion.Header>Data Services</Accordion.Header>
            <Accordion.Body>
              <p>Transform raw data into actionable insights with our comprehensive data management and analytics services.</p>
              <ul>
                <li><strong>Data Analytics and Visualization:</strong> Analyze data and create interactive dashboards using tools like Tableau and Power BI for informed decision-making.</li>
                <li><strong>Database Management and Optimization:</strong> Manage and optimize your databases to ensure high performance and reliability, including query optimization and indexing.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Effective data services provide valuable insights and ensure your data infrastructure supports your business objectives.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 7. Digital Marketing & Customer Experience */}
          <Accordion.Item eventKey="6">
            <Accordion.Header>Digital Marketing & Customer Experience</Accordion.Header>
            <Accordion.Body>
              <p>Enhance your digital presence and customer interactions with our targeted marketing and experience strategies.</p>
              <ul>
                <li><strong>Digital Marketing:</strong> Develop SEO, email, and social media strategies to increase your digital engagement and reach.</li>
                <li><strong>Customer Experience (CX) Design:</strong> Map and optimize the customer journey to improve satisfaction and retention.</li>
                <li><strong>Conversion Optimization:</strong> Implement A/B testing and analytics to maximize conversion rates and drive growth.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Effective digital marketing and customer experience strategies drive engagement, satisfaction, and business growth.</p>
            </Accordion.Body>
          </Accordion.Item>

          {/* 8. Support & Maintenance */}
          <Accordion.Item eventKey="7">
            <Accordion.Header>Support & Maintenance</Accordion.Header>
            <Accordion.Body>
              <p>Ensure your systems remain secure, updated, and running smoothly with our comprehensive support and maintenance services.</p>
              <ul>
                <li><strong>Monitoring:</strong> Proactive monitoring to detect and resolve issues before they impact your operations.</li>
                <li><strong>Regular Updates:</strong> Keep your systems secure and up-to-date with the latest patches and enhancements.</li>
                <li><strong>Technical Support:</strong> Provide immediate assistance for any technical incidents or issues.</li>
              </ul>
              <p><strong>Why This Matters:</strong> Ongoing support ensures your systems are secure, reliable, and continuously optimized for performance.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

       

      </div>
    </section>
  );
};

export default Services;



// src/components/Projects.js
import React, { useState } from 'react';
import { Modal, Button, Card, Row, Col } from 'react-bootstrap';

// Import project images
import project1 from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import project1Detail from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import project2 from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import project2Detail from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import project3 from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
import project3Detail from '../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Developed a web-based analytics dashboard leveraging machine learning for predictive insights.',
      technologies: 'React, Node.js, TensorFlow, MongoDB',
      role: 'Full-Stack Development, ML Integration',
      image: project1,
      detailImage: project1Detail,
      detailDescription: 'Detailed description of the AI-Powered Analytics Dashboard, challenges faced, solutions implemented, and technologies used.',
      // Optional: Add liveLink and repoLink
      // liveLink: 'https://live-demo.com/project1',
      // repoLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      title: 'E-commerce Mobile App',
      description: 'Created a cross-platform mobile application for seamless shopping experiences.',
      technologies: 'React Native, Firebase, Redux',
      role: 'Mobile Development, Backend Integration',
      image: project2,
      detailImage: project2Detail,
      detailDescription: 'Detailed description of the E-commerce Mobile App, challenges faced, solutions implemented, and technologies used.',
      // liveLink: 'https://live-demo.com/project2',
      // repoLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      title: 'DevOps Pipeline Automation',
      description: 'Implemented automated CI/CD pipelines to enhance deployment efficiency.',
      technologies: 'Jenkins, Docker, Kubernetes, AWS',
      role: 'DevOps Engineering, Infrastructure Setup',
      image: project3,
      detailImage: project3Detail,
      detailDescription: 'Detailed description of the DevOps Pipeline Automation project, challenges faced, solutions implemented, and technologies used.',
      // liveLink: 'https://live-demo.com/project3',
      // repoLink: 'https://github.com/yourusername/project3'
    },
    // Add more projects here following the same structure
  ];

  const handleShowModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Projects</h2>
        <Row>
          {projects.map(project => (
            <Col md={4} sm={6} xs={12} key={project.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img 
                  variant="top" 
                  src={project.image} 
                  alt={`${project.title} Image`} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <ul className="list-unstyled mb-3">
                    <li><strong>Technologies:</strong> {project.technologies}</li>
                    <li><strong>Role:</strong> {project.role}</li>
                  </ul>
                  <Button 
                    variant="primary" 
                    className="mt-auto" 
                    onClick={() => handleShowModal(project)}
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal for Project Details */}
        {currentProject && (
          <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>{currentProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={currentProject.detailImage} 
                className="img-fluid mb-3" 
                alt={`${currentProject.title} Detail`} 
              />
              <p>{currentProject.detailDescription}</p>
              <h6>Technologies Used:</h6>
              <p>{currentProject.technologies}</p>
              <h6>Your Role:</h6>
              <p>{currentProject.role}</p>
              {/* Optional: Add links to live demo and repository */}
              {/* 
              <h6>Live Demo:</h6>
              <p>
                <a href={currentProject.liveLink} target="_blank" rel="noopener noreferrer">
                  {currentProject.liveLink}
                </a>
              </p>
              <h6>Repository:</h6>
              <p>
                <a href={currentProject.repoLink} target="_blank" rel="noopener noreferrer">
                  {currentProject.repoLink}
                </a>
              </p>
              */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default Projects;

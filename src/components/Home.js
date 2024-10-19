// src/components/Home.js
import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-4">Transforming Your Digital Presence</h1>
        <p className="lead">End-to-end solutions in Web & Mobile Development, AI, DevOps, and more.</p>
        <Link 
          to="services" 
          smooth={true} 
          duration={500} 
          className="btn btn-primary btn-lg mt-3"
          role="button"
          aria-label="Navigate to Services Section"
        >
          Our Services
        </Link>
      </div>
    </section>
  );
};

export default Home;

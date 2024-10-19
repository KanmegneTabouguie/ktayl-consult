// src/components/About.js
import React from 'react';
import team1 from '../assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg'; // Adjust the path as needed

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">About Us</h2>
        <p className="text-center">
          With expertise in web development, mobile app development, DevOps, DevSecOps, machine learning, automation, AI, and generative AI, we provide comprehensive consulting services to drive your business forward.
        </p>
        {/* Team Members */}
        <div className="row mt-4">
          <div className="col-md-4 text-center">
            <img src={team1} className="rounded-circle mb-2" alt="John Doe" width="150" />
            <h5>John Doe</h5>
            <p>Lead Developer</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={team1} className="rounded-circle mb-2" alt="John Doe" width="150" />
            <h5>Philipe Down</h5>
            <p>UI/UX</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={team1} className="rounded-circle mb-2" alt="John Doe" width="150" />
            <h5>David Cole</h5>
            <p>QA</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;

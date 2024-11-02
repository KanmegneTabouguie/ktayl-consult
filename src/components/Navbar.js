// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top shadow-sm ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">Ktayl-Consult</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                className="nav-link active" 
                to="home" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to Home Section"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="about" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to About Section"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="services" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to Services Section"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="projects" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to Projects Section"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="testimonials" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to Testimonials Section"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="contact" 
                smooth={true} 
                duration={500}
                aria-label="Navigate to Contact Section"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

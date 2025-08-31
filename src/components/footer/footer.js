import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-dark text-light py-3 mt-5" id="contact">
      <Container>
        <Row className="justify-content-between align-items-center text-center">
          <Col md={4} xs={12} className="follow-us-col">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="" target="" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" target="" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" target="" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" target="" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>

          <Col md={4} xs={12}>
            <h5>Quick Links</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a 
                  href="#home" 
                  className="text-light footer-link" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="#about" 
                  className="text-light footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  About
                </a>
              </li>
              <li className="list-inline-item">
                <a 
                  href="#Features" 
                  className="text-light footer-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('Features');
                  }}
                >
                  Features
                </a>
              </li>
              
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <h5>Contact Us</h5>
            <p>Email: support@zypsii.com <br></br> Phone: +91 8970559490</p>
          </Col>
        </Row>
        <hr className="bg-light" />
        <p className="text-center">&copy; 2025 Zypsii. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

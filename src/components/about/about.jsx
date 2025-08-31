import React from "react";
import { motion } from "framer-motion";
import "./about.css";
import aboutImg1 from "../../assert/about.png";
import aboutImg2 from "../../assert/about2.jpg";
// import aboutImg3 from "../../assert/Screenshot__69_-removebg-preview.png";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="about-section" id="about">
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="fw-bold mb-4">About Zypsii</h1>
          <p className="lead">Your Ultimate Travel Companion</p>
        </motion.div>

        {/* Main Content */}
        <div className="row align-items-center mb-5">
          <motion.div 
            className="col-md-6 mb-4 mb-md-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <img src={aboutImg1} alt="Travel Experience" className="img-fluid" />
          </motion.div>
          <motion.div 
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <h2 className="fw-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Zypsii was born from a passion for travel and a desire to make travel planning easier and more enjoyable. 
              We understand that every journey is unique, and we're here to help you create unforgettable experiences.
            </p>
            <p>
              Our platform combines cutting-edge technology with local expertise to provide you with the best travel 
              recommendations, real-time updates, and seamless trip planning tools.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        {/* <div className="row mb-5">
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="feature-card text-center p-4">
              <i className="fas fa-map-marked-alt mb-3"></i>
              <h3 className="h5 fw-bold">Smart Navigation</h3>
              <p>Find the best routes and discover hidden gems with our intelligent navigation system.</p>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="feature-card text-center p-4">
              <i className="fas fa-users mb-3"></i>
              <h3 className="h5 fw-bold">Community Driven</h3>
              <p>Connect with fellow travelers and share experiences in our vibrant community.</p>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="feature-card text-center p-4">
              <i className="fas fa-calendar-check mb-3"></i>
              <h3 className="h5 fw-bold">Easy Planning</h3>
              <p>Plan your trips effortlessly with our intuitive itinerary builder.</p>
            </div>
          </motion.div>
        </div> */}

        {/* Mission Section */}
        <div className="row align-items-center">
          <motion.div 
            className="col-md-6 mb-4 mb-md-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h2 className="fw-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              At Zypsii, we're on a mission to transform the way people travel. We believe that travel should be 
              accessible, enjoyable, and enriching for everyone.
            </p>
            <p>
              By combining technology with human expertise, we're making travel planning more intuitive and 
              helping travelers create meaningful connections with the places they visit.
            </p>
          </motion.div>
          <motion.div 
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <img src={aboutImg2} alt="Travel Mission" className="img-fluid" />
          </motion.div>
        </div>

        {/* Team Section */}
        {/* <div className="row mt-5">
          <motion.div 
            className="col-12 text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="fw-bold">Our Team</h2>
            <p className="lead">Meet the passionate people behind Zypsii</p>
          </motion.div>
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="team-member text-center">
              <img src={aboutImg3} alt="Team Member" className="rounded-circle mb-3" />
              <h3 className="h5 fw-bold">John Doe</h3>
              <p className="text-muted">Founder & CEO</p>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="team-member text-center">
              <img src={aboutImg3} alt="Team Member" className="rounded-circle mb-3" />
              <h3 className="h5 fw-bold">Jane Smith</h3>
              <p className="text-muted">Head of Product</p>
            </div>
          </motion.div>
          <motion.div 
            className="col-md-4 mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="team-member text-center">
              <img src={aboutImg3} alt="Team Member" className="rounded-circle mb-3" />
              <h3 className="h5 fw-bold">Mike Johnson</h3>
              <p className="text-muted">Lead Developer</p>
            </div>
          </motion.div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection; 
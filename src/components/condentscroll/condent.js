import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; 
import img1 from "../../assert/Screenshot__69_-removebg-preview.png";
import img2 from "../../assert/Screenshot__70_-removebg-preview.png";
import img3 from "../../assert/Screenshot__71_-removebg-preview.png";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const TravelSection = () => {
  return (
    <div className="travel-section">
      <div className="container">
        {/* Section 1 */}
        <div className="row align-items-center mb-5">
          <motion.div 
            className="col-md-6 mb-4 mb-md-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.img 
              src={img1} 
              alt="Travel" 
              className="travel-image" 
              whileHover={{ scale: 1.05 }} 
            />
          </motion.div>
          <motion.div 
            id="explore"
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
          >
            <h2 className="fw-bold">Discover the Best Places to Explore!</h2>
            <p>Ready for your next adventure? With Zypsii, explore breathtaking destinations worldwide.</p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <motion.div 
            className="col-md-6 mb-4 mb-md-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.img 
              src={img2} 
              alt="Adventure" 
              className="travel-image" 
              whileHover={{ scale: 1.05 }} 
            />
          </motion.div>
          <motion.div 
            id="chat"
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="fw-bold">Stay Connected with Travel Chat!</h2>
            <p>Chat with fellow travelers in real time, plan trips together, and share experiences effortlessly.</p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="row align-items-center mb-5">
          <motion.div 
            className="col-md-6 mb-4 mb-md-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.img 
              src={img3} 
              alt="Explore" 
              className="travel-image" 
              whileHover={{ scale: 1.05 }} 
            />
          </motion.div>
          <motion.div 
            className="col-md-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInRight}
          >
            <h2 className="fw-bold">Plan Your Trip with Ease!</h2>
            <p>Customize travel plans, collaborate with friends, and manage itineraries effortlessly.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TravelSection;

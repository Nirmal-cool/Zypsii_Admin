import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ScrollAnimationSection.css";
import img from "../../assert/app-ss1.png"
import mobileIcon from "../../assert/mobile-icon.png";
import { TbBackground } from "react-icons/tb";

const ScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="scroll-section">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-4">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-6 image-container animate-on-scroll fade-right">
            <img
              src={img}
              alt="Feature"
              className="feature-image"
            />
          </div>

          {/* Right Side - Text */}
          <div className="col-lg-6 col-md-6 content-container animate-on-scroll fade-left">
            <div className="text-container">
              <h2 className="fw-bold mb-3">
                <img 
                  src={mobileIcon} 
                  alt="Mobile App" 
                  style={{ 
                    width: '70px', 
                    height: '70px', 
                    marginRight: '12px',
                    verticalAlign: 'middle'
                  }} 
                />
                Coming Soon<span className="logo-text ms-2 fw-bold "style={{color:"#b300b3"}}>!</span>
              </h2>
              <p className="mb-4">
                Download the app & explore the world with ease.
              </p>
              {/* <button className="btn bttn btn-lg">Get Started</button              > */}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollAnimation;

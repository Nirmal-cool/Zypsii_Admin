import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [showLaunchPopup, setShowLaunchPopup] = useState(false);

  // Set your launch date here with a fixed date
  const launchDate = new Date();
  launchDate.setHours(7, 0, 0, 0); // Set to 7:00 AM today

  useEffect(() => {
    // Add scroll lock class when component mounts
    document.body.classList.add('countdown-active');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsExpired(true);
        setShowLaunchPopup(true);
        return;
      }

      setTimeLeft({
        hours: Math.floor(distance / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    // Cleanup function to remove scroll lock class if component unmounts
    return () => {
      clearInterval(timer);
      document.body.classList.remove('countdown-active');
    };
  }, []);

  const handleExplore = () => {
    // Remove the countdown component from the DOM
    const countdownElement = document.querySelector('.countdown-wrapper');
    if (countdownElement) {
      countdownElement.remove();
    }
    // Remove scroll lock
    document.body.classList.remove('countdown-active');
  };

  return (
    <div className="countdown-wrapper">
      {!isExpired ? (
        <div className="countdown-container">
          <div className="countdown-content">
            <h1>Zypsii</h1>
            <p className="launch-text">Launching Soon!</p>
            <div className="countdown-timer">
              <div className="time-block">
                <span className="number">{timeLeft.hours}</span>
                <span className="label">Hours</span>
              </div>
              <div className="time-block">
                <span className="number">{timeLeft.minutes}</span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-block">
                <span className="number">{timeLeft.seconds}</span>
                <span className="label">Seconds</span>
              </div>
            </div>

            <div className="features-preview">
              <h2>What's Coming?</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <i className="fas fa-map-marked-alt"></i>
                  <p>Smart Navigation</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-users"></i>
                  <p>Travel Community</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-calendar-check"></i>
                  <p>Easy Planning</p>
                </div>
                <div className="feature-item">
                  <i className="fas fa-comments"></i>
                  <p>Travel Chat</p>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-sign-hanging" ></i>
                  <p>Share Your Moments</p>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-globe"></i>
                  <p>Discover Places</p>
                </div>
              </div>
            </div>

            {/* <div className="newsletter">
              <h3>Get Notified When We Launch</h3>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Notify Me</button>
              </form>
            </div> */}
          </div>
        </div>
      ) : (
        <div className={`launch-popup ${showLaunchPopup ? 'show' : ''}`}>
          <div className="popup-content">
            <div className="launch-animation">
              <div className="rocket">🚀</div>
            </div>
            <h2>We're Live!</h2>
            <p>Welcome to the Zypsii World</p>
            <button className="explore-button" onClick={handleExplore}>
              Explore Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown; 
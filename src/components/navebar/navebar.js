// import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";
// import img from '../../assert/1.jpg'
// export default function ComingSoon() {
//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   function calculateTimeLeft() {
//     const launchDate = new Date("2025-04-01T00:00:00").getTime();
//     const now = new Date().getTime();
//     const difference = launchDate - now;

//     if (difference > 0) {
//       return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <NavBar />

//       {/* Main Content Section */}
//       <motion.div
//         className="container-fluid text-center text-white d-flex flex-column align-items-center bg-dark justify-content-center min-vh-100"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <motion.h1
//           className="display-3 fw-bold mb-4"
//           whileInView={{ y: [50, 0], opacity: [0, 1] }}
//           transition={{ duration: 1 }}
//         >
//           Coming Soon
//         </motion.h1>

//         <motion.p
//           className="lead mb-4"
//           whileInView={{ opacity: [0, 1] }}
//           transition={{ duration: 1.2, delay: 0.5 }}
//         >
//           Get ready for an amazing experience. Stay tuned!
//         </motion.p>

//         {/* Countdown Timer */}
//         <motion.div
//           className="d-flex gap-3 fs-2 fw-bold"
//           whileInView={{ scale: [0.8, 1] }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <div>{timeLeft.days}d</div>
//           <div>{timeLeft.hours}h</div>
//           <div>{timeLeft.minutes}m</div>
//           <div>{timeLeft.seconds}s</div>
//         </motion.div>

//         {/* Email Subscription */}
//         <motion.div className="mt-4 d-flex" whileInView={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 1, delay: 1 }}>
//           <motion.input type="email" placeholder="Enter your email" className="form-control me-2 w-auto" whileFocus={{ scale: 1.05 }} />
//           <motion.button className="btn btn-primary" whileHover={{ scale: 1.1 }}>
//             Notify Me
//           </motion.button>
//         </motion.div>

//         {/* Screenshot Gallery */}
//         <ScreenshotGallery />

//         {/* Social Links */}
//         <motion.div className="mt-4 d-flex gap-3" whileInView={{ y: [20, 0], opacity: [0, 1] }} transition={{ duration: 1.2, delay: 1.5 }}>
//           <a href="#" className="text-white">Facebook</a>
//           <a href="#" className="text-white">Instagram</a>
//           <a href="#" className="text-white">Twitter</a>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// function NavBar() {
//   return (
//     <motion.nav
//       className="navbar navbar-expand-lg navbar-dark  fixed-top text-muted"
//       style={{background: "#fd6c87"}}
//       whileInView={{ opacity: [0, 1], y: [-20, 0] }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container">
//         <a className="navbar-brand" href="#">App Name</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">About</a></li>
//             <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
//           </ul>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }


// function ScreenshotGallery() {
//   const screenshots = [
//     img ,img ,img
//   ];

//   return (
//     <motion.div className="mt-4 row g-3">
//       {screenshots.map((src, index) => (
//         <motion.div
//           key={index}
//           className="col-md-4"
//           whileInView={{ opacity: [0, 1], y: [20, 0] }}
//           transition={{ duration: 0.8, delay: index * 0.3 }}
//           whileHover={{ scale: 1.05 }}
          
//         >
//           <img src={src} alt={`Screenshot ${index + 1}`} className="img-fluid rounded shadow h-75"/>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// }
import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../assert/logo.png"; // Import your logo image

const MyNavbar = () => {
  return (
    <Navbar
      bg=""
      variant="dark"
      expand="lg"
      className="px-3"
      // style={{ backgroundColor: "#A60F93" }}
    >
      <Container>
        {/* Brand with Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={logo} // Path to your logo
            alt="Brand Logo"
            width="40" // Adjust size as needed
            height="40"
            className="d-inline-block align-top me-2 border border-white rounded bg-white"
          />
          Zypsii
        </Navbar.Brand>
        
        {/* Uncomment for Navbar Links */}
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default MyNavbar;


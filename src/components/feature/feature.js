import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assert/Screenshot__74_-removebg-preview.png";
import image1 from "../../assert/Screenshot__73_-removebg-preview.png";
import image2 from "../../assert/Screenshot__72_-removebg-preview.png";
import image3 from "../../assert/Screenshot__67_-removebg-preview.png"

export default function FeaturesSection() {
    const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <>
            <Container className="text-center container-fluid py-5" ref={ref1}>
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <motion.img
                        id="nearest"
                            src={image}
                            height={5}
                            alt="App Screenshot"
                            className="img-fluid rounded"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        />
                    </Col>
                    <Col md={8} className="text-start">
                        <motion.h2 
                            className="fw-bold d-flex justify-content-center" 
                            initial={{ opacity: 0 }} 
                            animate={inView1 ? { opacity: 1 } : {}} 
                            transition={{ duration: 1 }}>
                            Plan your extraordinary getaway.
                        </motion.h2>
                        <Row className="mt-4">
                            {["Story Section", "Plan Preparation", "Travel"].map((title, index) => (
                                <Col md={4} className="text-center" key={index}>
                                    <motion.img
                                        src={image2}
                                        height={100}
                                        width={60}
                                        alt={`${title} Icon`}
                                        className="mb-2"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={inView1 ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                    />
                                    <h5>{title}</h5>
                                    <p>
                                        {title === "Story Section" && " Share your travel experiences through pictures, videos, and blogs. Connect with other travelers and get inspired!"}
                                        {title === "Plan Preparation" && "Easily create custom itineraries"}
                                        {title === "Travel" && "And off you go, on yet another thrilling adventure. It’s that easy."}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            <Container className="text-center py-5" ref={ref2}>
                <Row className="align-items-center">
                    <Col md={8} className="text-start">
                        <motion.h2 
                            className="fw-bold d-flex justify-content-center" 
                            initial={{ opacity: 0 }} 
                            animate={inView2 ? { opacity: 1 } : {}} 
                            transition={{ duration: 1 }}>
                            Track Your Trip Updates.
                        </motion.h2>
                        <Row className="mt-4">
                            {[" Live Tracking ", "Smart Travel Planner", " Trip Collaboration "].map((title, index) => (
                                <Col md={4} className="text-center" key={index}>
                                    <motion.img
                                        src={image3}
                                        height={100}
                                        width={60}
                                        alt={`${title} Icon`}
                                        className="mb-2"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={inView2 ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                    />
                                    <h5>{title}</h5>
                                    <p>
                                        {title === " Live Tracking " && " Stay safe and connected by sharing your real-time location with friends and family."}
                                        {title === "Smart Travel Planner" && "Get recomendations for destinations, hotels, and activities."}
                                        {title === " Trip Collaboration " && "Plan group trips easily! Share itineraries, and travel updates with your group in real time."}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4} className="text-center">
                        <motion.img
                        id="track"
                            src={image1}
                            width={500}
                            alt="App Screenshot"
                            className="img-fluid rounded"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView2 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

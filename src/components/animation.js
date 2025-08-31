import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AnimatedContent({ title, description, image, reverse }) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <Container className="my-5">
            <Row className="align-items-center" ref={ref}>
                <Col md={6} className={reverse ? "order-md-2 text-center" : "text-center"}>
                    <motion.img
                        src={image}
                        height={80}
                        width={350}
                        alt={title}
                        className="img-fluid rounded"
                        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    />
                </Col>
                <Col md={6} className="text-start">
                    <motion.h2
                        className="fw-bold"
                        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        {description}
                    </motion.p>
                </Col>
            </Row>
        </Container>
    );
}

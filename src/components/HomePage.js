import React from 'react';
import { Container, Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './HomePage.css'; // Make sure this file exists and is correctly linked

const HomePage = () => {
  return (
    <Container fluid className="home-container">
      <Row className="justify-content-center text-center mb-4">
        <Col md={8}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="home-title"
          >
            Welcome to the Realtime Deepfake Application
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="home-description"
          >
            Discover the cutting-edge technology of deepfakes in real-time. Explore how our application can transform your images and videos with state-of-the-art deepfake technology.
          </motion.p>
          <Button href="/deepfake" variant="primary" size="lg" className="get-started-button">
            Get Started
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={12} className="mb-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.livelaw.in/h-upload/2023/11/21/1600x960_505235-deepfake-technology.webp"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Deepfake Technology</h3>
                <p>Explore how deepfake technology works and its applications.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://lawtrend.in/wp-content/uploads/2023/11/ai-deep-fake.jpeg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Realtime Deepfakes</h3>
                <p>See the magic of real-time deepfake generation with our app.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202311/untitled_design_-_2023-11-09t103355-sixteen_nine.jpg?size=948:533"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Innovative Features</h3>
                <p>Discover the innovative features that set our app apart.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="home-card">
              <Card.Img variant="top" src="https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkyOS1hZXctMzFfMV8xLmpwZw.jpg" />
              <Card.Body>
                <Card.Title>What is Deepfake?</Card.Title>
                <Card.Text>
                  Learn about the technology behind deepfakes and how it is revolutionizing digital content.
                </Card.Text>
                <Button variant="primary">
                     <a href="https://spectrum.ieee.org/what-is-deepfake"></a>
                    Learn More</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="home-card">
              <Card.Img variant="top" src="https://clt.nliu.ac.in/wp-content/uploads/2023/07/deepfake_large.jpg" />
              <Card.Body>
                <Card.Title>How It Works</Card.Title>
                <Card.Text>
                  Discover how our application generates deepfake content in real-time.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="home-card">
              <Card.Img variant="top" src="https://www.knowledgenile.com/wp-content/uploads/brizy/imgs/Impact-of-Deepfake-Technology-on-Society-Challenges-and-Solutions-789x526x0x62x789x402x1712585649.png" />
              <Card.Body>
                <Card.Title>Get Started</Card.Title>
                <Card.Text>
                  Ready to experience deepfake technology? Click below to start using our app.
                </Card.Text>
                <Button variant="primary">Get Started</Button>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

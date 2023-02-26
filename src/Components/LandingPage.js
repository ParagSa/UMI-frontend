import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function LandingPage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Experience Exceptional Medical Care</h1>
          <p>At ABC Medical, we provide top-quality care for patients of all ages. Our team of experienced physicians and staff is committed to your health and well-being.</p>
          <Button variant="primary">Learn More</Button>
        </Col>
        <Col>
          <img src="https://via.placeholder.com/500x500" alt="Medical staff" />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Our Services</h2>
          <ul>
            <li>Primary Care</li>
            <li>Pediatrics</li>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
          </ul>
          <Button variant="primary">View All Services</Button>
        </Col>
        <Col>
          <h2>Make an Appointment</h2>
          <p>Ready to book your appointment? Contact us today to schedule a visit with one of our physicians.</p>
          <Button variant="primary">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Company Name</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros a velit malesuada scelerisque eu a lorem. Quisque ut elit nec turpis faucibus hendrerit.</p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>123 Main Street<br />Anytown, USA 12345<br />(123) 456-7890<br />info@companyname.com</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="text-muted">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

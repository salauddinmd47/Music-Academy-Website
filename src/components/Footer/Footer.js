import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className="bg-dark text-start text-light  p-3">
      <Row className="">
        <Col lg={3}>
          <h4 className="text-secondary">Contact us</h4>
          <li>+8801777-234354</li>
          <li>E-mail:srutinandan@gmai.com</li>
          <li>390/B Shewrapara, Dhaka-7434</li>
        </Col>
        <Col lg={3}>
          <h4 className="text-secondary">Quick Links</h4>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink to="/teacher">Our Teachers</NavLink>
          </li>
        </Col>
        <Col lg={3}>
          <h4 className="text-secondary">Useful Links</h4>
          <li>
            <NavLink to="home">Privacy Policy</NavLink>
          </li>
          <li>
            <NavLink to="home">Terms and Condition</NavLink>
          </li>
          <li>
            <NavLink to="home">Support</NavLink>
          </li>
          <li>
            <NavLink to="home">FAQ</NavLink>
          </li>
        </Col>
        <Col lg={3}>
          <h4 className="text-secondary">Working hours</h4>
          <p>9am-6px , Monday-Thursday</p>
          <p>Monday-Thursday</p>
          <Link to="./courses">
            <Button className="mb-2">Book a Class</Button>
          </Link>
        </Col>
        <hr />
        <div className="text-center">
          <p>
            <small>Copyright © 2021. All rights reserved.</small>
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;

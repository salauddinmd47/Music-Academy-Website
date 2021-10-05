import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../images/about1.jpg";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

//  This about component is created for showing on home page as a section 

const About = () => {
  return (
    <Container className="my-3 py-5 ">
      <Row>
        <Col xs={6} md={6}>
          <img className="img-fluid rounded shadow " src={aboutImg} alt="" />
        </Col>
        <Col className="text-start mt-3" xs={6} md={6}>
          <h4 className="component-title">About us</h4>
          <h2>Learn The Music From The Core & Become Mastery</h2>
          <p>
            Learning music is not so difficult that you think. We offer courses
            those are very easy to learn. Our expert teacher can make it for you
            with very very and simple way
          </p>
          <Link to="./about"> 
            <Button>About us</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

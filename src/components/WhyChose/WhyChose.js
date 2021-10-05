import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap"; 
import { Link, } from "react-router-dom";
import "./WhyChose.css";

const WhyChose = () => {
  return (
    <div>
      <div className="why-chose">
        <Container style={{ height: "500px" }}>
          <Row>
            <Col className="mt-5 pt-5" md={6}>
              <div className="text-start">
                <h4 className="component-title">Why Chose us?</h4>
                <h1 className="text-white ">We Give You <br /> The Best Facilities to Learning</h1>
              </div>
            </Col> 
            <Col className="mt-5 pt-5" md={6}>
              <div className="mt-5 ">
               <Link to="/courses" > <Button className="me-3 ">Book a Class</Button></Link>
               <Link to="/courses"> <a href='/'>Book Free Counceling <FontAwesomeIcon icon={faArrowRight}/></a></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhyChose;

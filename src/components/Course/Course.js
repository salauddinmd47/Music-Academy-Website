import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendar,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = (props) => {
  const { name, price, startDate, duration, thumbnail,id } = props.course;
  return (
    <div>
      <Col>
        <Card className="shadow">
          <Card.Img variant="top" style={{ height: "250px" }} src={thumbnail} />
          <Card.Body>
            <h1 className="text-start course-title">{name}</h1>
            <Card.Text>
              <h2 className="text-start text-warning ">${price}</h2>
            </Card.Text>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-start course-details">
                  <FontAwesomeIcon
                    className="text-danger me-2"
                    icon={faClock}
                  />
                  {duration}
                </p>
                <p className="course-details">
                  <FontAwesomeIcon
                    className="text-danger me-2"
                    icon={faCalendar}
                  />
                  {startDate}
                </p>
              </div> 
              <div>
                <Link to={`/details/${id}`}>
                  <Button variant="warning">
                    Learn More
                    <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Course;

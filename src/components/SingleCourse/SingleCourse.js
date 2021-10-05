import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const SingleCourse = (props) => {
  const history = useHistory();
  const { name, price, duration, thumbnail, startDate } = props.course;

  const handleAdmission = () => {
    history.push("/admission");
  };
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
                <Button onClick={handleAdmission} variant="warning">
                  Start Now
                  <FontAwesomeIcon className="ms-3" icon={faHandPointer} />
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default SingleCourse;

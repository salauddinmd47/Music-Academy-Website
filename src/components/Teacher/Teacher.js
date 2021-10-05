import React from "react";
import { Card, Col } from "react-bootstrap";

const Teacher = (props) => {
  console.log(props);
  const {name, age, designation, country,img} = props.teacher
  return (
    <div>
      <Col>
        <Card>
          <Card.Img className='teacher-img' style={{ height:'300px' }} variant="top" src= {img} />
          <Card.Body className="text-start">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {designation}
            </Card.Text>
            <Card.Text>
                Age:{age}
            </Card.Text>
            <Card.Text>
               Country: {country}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Teacher;

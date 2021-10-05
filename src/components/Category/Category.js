import React from "react";
import { Card, Col } from "react-bootstrap";

const Category = (props) => {
  const { category, thumnail } = props.category;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={thumnail} />
          <Card.Body>
            <Card.Title>{category}</Card.Title>
            <Card.Text> 
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Category;

import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./categories.JSON")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mb-5">
      <div className="my-5">
        <h2 className="component-title ">Featured Categories</h2>
        <h1>Course Categories that We Offer</h1>
      </div>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {categories.map((category) => (
            <Category category={category} key={category.category}></Category>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Categories;

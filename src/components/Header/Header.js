 import React from "react";
import { 
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
// this is header component for creating necessary navigation for this site

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand className="academy-name text-danger" href="#">
            SaReGAMaPaDhaNi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex m-auto w-50">
              <FormControl
                type="search"
                placeholder="find your course"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink className="text-white me-3" to="/home">
                Home
              </NavLink>
              <NavLink className="text-white me-3" to="/courses">
                Courses
              </NavLink>
              <NavLink className="text-white me-3" to="/about">
                About Us
              </NavLink> 
              <NavLink className="text-white me-3" to="/teacher">
                Our Teacher
              </NavLink>
              <NavLink className="text-white me-3" to="/admission">
               Admission
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

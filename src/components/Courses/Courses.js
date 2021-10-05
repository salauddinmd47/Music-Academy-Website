import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{useEffect,useState} from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import { Button, Container, Row } from "react-bootstrap";
import Course from "../Course/Course";
import { useHistory } from "react-router";


const Courses = () => {
  const [courses,setCourses] = useState([]);
  const history = useHistory();

  useEffect(()=>{
    fetch('./courses.JSON')
    .then(res => res.json())
    .then(data => setCourses(data.slice(0,6)))
  },)
  const visitCoursesPage = () => {
    history.push("/courses");
  };
  
  return (
    <div>
      <Container>
        <div>
          <h2 className="component-title">Our Course</h2>
          <h1>Most Popular Classes</h1>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {courses.map((course) => (
            <Course course={course} key={course.id}></Course>
          ))}
        </Row>
      </Container>
      <Button
        onClick={visitCoursesPage}
        className="px-5 mt-3"
        variant="danger"
        size="lg"
      >
        View all
        <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
      </Button>
    </div>
  );
};

export default Courses;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import SingleCourse from '../SingleCourse/SingleCourse';
const AllCourses = () => {
    const [courses] = useCourses()
    return (
        <div>
            <h2 className='component-title'>Our Courses</h2>
            <h1>Welcome to Our World Class Course</h1>
            <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-3">
               {
                   courses.map(course=> <SingleCourse 
                   key={course.id}
                   course={course}
                   ></SingleCourse>)
               }
           </Row>
            </Container>
        </div>
    );
};

export default AllCourses;
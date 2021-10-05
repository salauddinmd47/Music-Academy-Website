import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div>
             <div className="mt-3">
                 <h2 className="text-danger">Our teacher</h2>
                 <h1>Our World Class Teacher</h1>
             </div>
             <Container>
                 <Row xs={1} md={2} lg={3} className="g-4 my-3">
                     {
                         teachers.map(teacher=> <Teacher 
                            key={teacher.id}
                            teacher={teacher}></Teacher>)
                     }
                 </Row>

             </Container>
        </div>
    );
};

export default Teachers;
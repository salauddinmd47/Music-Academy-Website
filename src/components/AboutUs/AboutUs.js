import React from "react";
import { Container } from "react-bootstrap";
// This is about us page where out putted some information about our academy 
const AboutUs = () => {
  return (
    <Container className="text-start">
      <h2 className="text-center text-secondary">About us</h2>
      <p className='fs-3'>
        SaReGaMaPaDhaNi  Academy of Music provides a comprehensive and effective
        academic program that teaches varied genres of music from across the
        globe. The Academy seeks to provide music education that builds
        character and personality, preparing students to enter the music
        industry as performers, arrangers, songwriters, composers, producers,
        engineers, teachers and more. The opportunities for students who live
        and learn at the academy are endless.<br/> We are here to nurture, cultivate
        talent and build a pool of professionals that represent the country on
        an international level and also become global ambassadors of music. SAM
        fosters a mature community for musicians and music lovers, providing
        them with an evolved perspective that transforms their relationship with
        music and life.<br/> This time around, we are taking our program online! Learn
        from our award winning teachers through our meticulously designed
        curriculum that includes all Live sessions and a holistic balance
        between group and individual lessons.
      </p>
    </Container>
  );
};

export default AboutUs;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
const CourseDetails = () => {
  const { courseId } = useParams();
  return (
    <div>
      <h1 className="text-primary">Course details off Id: {courseId}</h1>
      <Container>
        <Row className="my-3" >
          <Col sm={8} lg={9}>
            <h2>Our dynamic Course Details is <span className="text-danger">Coming soon</span>......</h2>
            <p className="text-start" >
              Art and music are basic human functions. Humankind and art cannot
              function without one another. We have the burning desire to
              create, whatever it may be and however tiny or grand. The
              interaction with sound is unavoidable, either to make it or take
              pleasure in it. People have always found music significant in
              their lives, whether for enjoyment in listening, the emotional
              response, performing, or creating. This is no different for
              classical music or contemporary concert music. Both musics have
              immense worth for our society; however, the problem we all know in
              this field is that this music is little known and hence
              underappreciated. As a musician and artist it is my responsibility
              that others can learn to enjoy the art for which I have utter
              passion. It goes without saying that in mainstream American
              culture, classical or concert music is not a huge part of people's
              lives. There are still stigmas that contribute to this, as well as
              the practices of the government in the last two decades (declining
              music education in schools on the local level, resistance to
              increased NEA funding and less visibility of the arts on the
              national level; let us hope that the Obama administration can
              start to reverse these trends). Many people may still believe that
              classical music is for the rich, older, and the well-educated.
              Others may feel awkward about going to classical music events
              because they feel as if they need to act and dress a certain way
              in order to enter the concert or recital hall. Even more, the
              pretentiousness and elitism that some artists exhibit is amplified
              by some television shows, commercials, plays, books, by people of
              influence and even themselves, which distance musicians from
              mainstream society. While some of this is true, as with nearly any
              stereotype, it is not entirely true. With the impression that
              concert music has on society, the majority decide that it is not
              "for them" simply because they believe it has no relevance or
              worth to their lives. This is further compounded by the past
              government's lack of interest in promoting and supporting the
              arts, whether it is to fund arts organizations or arts education.
              Now, the current government give us hope and we have seen evidence
              of its commitment; but most importantly our American society needs
              to believe that everyone can find worth and enjoyment in
              classical/concert music.
            </p>
          </Col>
          <Col
            className="bg-gradient bg-primary p-2 my-2 rounded shadow "
            sm={4}
            lg={3}
          >
            <blockquote>
              "Music is the language of the spirit. It opens the secret of life
              bringing peace, abolishing strife"-Kahlil Gibran
            </blockquote>
            <blockquote>
              "Music is the only language in which you cannot say a mean or
              sarcastic thing"-John Erskine
            </blockquote>
            <blockquote>
              "If Music is a Place — then Jazz is the City, Folk is the
              Wilderness, Rock is the Road, Classical is a Temple"-Vera Nazarin
            </blockquote>
            <blockquote>
              "Music is the literature of the heart; it commences where speech
              ends"-Alphonse de Lamartine
            </blockquote>
            <blockquote>
              "Music is the art which is most nigh to tears and memory"-Oscar
              Wilde
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;

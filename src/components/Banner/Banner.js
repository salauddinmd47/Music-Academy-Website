import React from "react";
import "./Banner.css";
import banner from "../../images/front-banner.png";
import { Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// this is home page banner  
const Banner = () => {
  const history = useHistory();

  const handleCourseDetails = () => {
    history.push("/courses");
  };
  return (
    <div>
      <div className="banner">
        <div className="main-banner d-flex align-items-center justify-content-around">
          <div lg={6} className="text-start">
            <h2 className="academy-name text-danger">SaReGAMaPaDhaNi</h2>
            <h4 className="text-white">An Academy for Indian Music</h4>
            <h1 className="text-light fs-1">Learn the Music from the Master</h1>
            <Link to="/about">
              <Button className="px-3 mt-2" variant="primary" size="lg">
                Learn More
                <FontAwesomeIcon className="ms-3" icon={faArrowRight} />
              </Button>
            </Link>
          </div>
          <div>
            <img
              className="bannerPhoto"
              style={{ height: "90vh" }}
              src={banner}
              alt=""
            />
          </div>
        </div>
        <div
          lg={6}
          style={{ backgroundColor: "orange" }}
          className=" offer w-75 rounded mx-auto p-5"
        >
          <h2 className="text-secondary">Opening Offer</h2>
          <h1 className="text-secondary">Get a Free Trial Class</h1>
          <p>
            Bring your children to a trial lesson to find out how much they
            enjoy doing music or singing
          </p>
          <Button
            onClick={handleCourseDetails}
            className="me-3"
            variant="success"
          >
            Get Started
          </Button>
          <Button onClick={handleCourseDetails} variant="primary">
            Chose Course
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

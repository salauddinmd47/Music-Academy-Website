import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const backtoHome = () => {
    history.push("/home");
  };
  return (
    <div>
      <Container className="not-found pt-5">
        <div className="pt-5">
          <h2 className="text-danger">OOPPS!! 404</h2>
          <p>Sorry this page is not exist</p>
          <Button onClick={backtoHome} variant="warning">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;

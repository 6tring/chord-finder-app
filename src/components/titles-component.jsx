import React from "react";
import { Row, Col } from "react-bootstrap";

const Titles = () => {
  return (
    <>
      <Row>
        <Col className="title text-center mt-5 mb-4">
          GUITAR CHORD FINDER
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-4 title-text">
          Select a <span className="red-text">key</span>/
          <span className="red-text">root</span> then add any desired&nbsp;
          <span className="yellow-text">quality</span>,&nbsp;
          <span className="green-text">extension</span> and/or&nbsp;
          <span className="blue-text">bass</span>
        </Col>
      </Row>
    </>
  );
};

export default Titles;

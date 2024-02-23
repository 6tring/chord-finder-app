import React from "react";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Row>
        <Col className="text-center mt-3 mb-4 title-text mx-5">
          This Chord Finder uses{" "}
          <a href="https://react.dev/" class="chord-links" target="_blank">
            React
          </a>{" "}
          with the{" "}
          <a
            href="https://api.uberchord.com/"
            class="chord-links"
            target="_blank"
          >
            Uberchord API
          </a>{" "}
          to render chord diagrams based on the selections made above.
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-4 title-text mx-5 mb-5 pb-5">
          Some combinations of the above chord elements may yield no search
          results.
        </Col>
      </Row>
    </>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Titles from "./titles-component";
import KeyDropdown from "./key-dropdown-component";
import QualityDropdown from "./quality-dropdown-component";
import ExtensionDropdown from "./extension-dropdown-component";
import BassDropdown from "./bass-dropdown-component";
import ChordDiagram from "./chord-diagram-component";
import Footer from "./footer-component"

const ChordFinder = () => {
  return (
    <div className="background-image">
      <Container>
        <Titles />
        {/* mobile & tablet layout */}
        <Row className="mt-2 pb-4 text-center d-flex justify-content-center">
          <Row className="d-md-none">
            <Col className="col-2 col-sm-3" />
            <Col className="mb-4 col-4 col-sm-3">
              <KeyDropdown />
            </Col>
            <Col className="mb-4 col-4 col-sm-3">
              <QualityDropdown />
            </Col>
            <Col className="col-2 col-sm-3" />
          </Row>
          <Row className="d-md-none">
            <Col className="col-2 col-sm-3" />
            <Col className="col-4 col-sm-3">
              <ExtensionDropdown />
            </Col>
            <Col className="col-4 col-sm-3">
              <BassDropdown />
            </Col>
            <Col className="col-2 col-sm-3" />
          </Row>
          {/* desktop layout */}
          <Row className="d-none d-md-flex justify-content-center">
            <Col className="col-lg-2 col-xl-3" />
            <Col className="d-md-inline">
              <KeyDropdown />
            </Col>
            <Col className="d-md-inline">
              <QualityDropdown />
            </Col>
            <Col className="d-md-inline">
              <ExtensionDropdown />
            </Col>
            <Col className="d-md-inline">
              <BassDropdown />
            </Col>
            <Col className="col-lg-2 col-xl-3" />
          </Row>
        </Row>
        <Row
          className="row text-center mt-4 mb-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ChordDiagram />
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </div>
  );
};

export default ChordFinder;

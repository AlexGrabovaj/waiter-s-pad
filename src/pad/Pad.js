import React from "react";
import "./pad.scss";
import PadButton from "./inputs/Button";
import PadField from "./Field.js";
import { Col, Container, Row } from "reactstrap";

class Pad extends React.Component {
  render() {
    return (
      <Container className="pad-frame">
        <Row>
          <Col xs="12">
            <div className="pad-header"> Waiter's Pad </div>
          </Col>
        </Row>
        <Row className="pad-top-buttons">
          <Col xs="6">
            <PadButton>Options</PadButton>
          </Col>
          <Col xs="6">
            <PadButton>Save</PadButton>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <PadField />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pad;

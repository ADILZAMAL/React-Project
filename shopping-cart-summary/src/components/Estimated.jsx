import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Estimated(props) {
  return (
    <Row>
      <Col>
        <h2>Est. Total</h2>
      </Col>
      <Col>
        <h2>${props.total}</h2>
      </Col>
    </Row>
  );
}

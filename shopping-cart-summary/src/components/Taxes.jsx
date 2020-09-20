import React from "react";
import { Row, Col } from "react-bootstrap";
export default function Taxes(props) {
  return (
    <Row>
      <Col>Est. taxes & fees (Based on 94085)</Col>
      <Col>${props.tax}</Col>
    </Row>
  );
}

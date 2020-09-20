import React from "react";
import { Col, Row } from "react-bootstrap";
export default function Subtotal(props) {
  return (
    <Row>
      <Col>Subtotal</Col>
      <Col>${props.price}</Col>
    </Row>
  );
}

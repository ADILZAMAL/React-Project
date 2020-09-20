import React from "react";
import { Row, Col, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
const style = {
  pickupSaving: {
    textDecoration: "underline",
  },
  totalSaving: {
    color: "red",
    fontWeight: 800,
  },
};

export default function PickupSaving(props) {
  const tooltip = (
    <Tooltip id="tooltip">
      <p>
        Picking up your order in the store helps cut costs, and we pass the
        saving on to you.
      </p>
    </Tooltip>
  );
  return (
    <Row>
      <Col style={style.pickupSaving}>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={tooltip}
        >
          <p>Pickup Savings</p>
        </OverlayTrigger>
        ,
      </Col>
      <Col style={style.totalSaving}>-${props.saving}</Col>
    </Row>
  );
}

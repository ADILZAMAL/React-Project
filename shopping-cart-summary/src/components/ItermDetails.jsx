import React from "react";
import { useState } from "react";
import { Button, Row, Col, Collapse, Media } from "react-bootstrap";
export default function ItermDetails(props) {
  const [show, setShow] = useState(false);
  return (
    <Row>
      <Button
        className="m-2 item-details-button"
        onClick={() => setShow(!show)}
        variant="link"
      >
        {show ? "Hide item details -" : "Show item details +"}
      </Button>
      <Collapse in={show}>
        <Media>
          <img
            width={100}
            height={70}
            className="mr-3"
            src="https://m.media-amazon.com/images/I/31yropnn5JL._AC_SR300,300_.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>Media Heading</h5>
            <p>Jordan Fitness JF-22 Commercial Treadmill</p>
            <Row>
              <Col>
                <strong>${props.price}</strong>
                <br />
                <strong className="full__price">${props.fullPrice}</strong>
              </Col>
              <Col>Qty:1</Col>
            </Row>
          </Media.Body>
        </Media>
      </Collapse>
    </Row>
  );
}

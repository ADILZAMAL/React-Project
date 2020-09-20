import React from "react";
import { useState } from "react";
import { Row, Col, Button, Collapse, Form } from "react-bootstrap";
export default function PromoCode(props) {
  const [show, setShow] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [promo, setPromo] = useState(null);
  return (
    <Row>
      <Button
        className="m-2 btn-m"
        variant="link"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Promo code" : "Apply Promo Code"}
      </Button>
      <div
        className=" m-2 p-3"
        style={
          show
            ? {
                display: "block",
                width: "100%",
                backgroundColor: "lightgray",
                borderRadius: "4px",
              }
            : {}
        }
      >
        <Collapse in={show}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <strong>Promo Code </strong>
              </Form.Label>
              <Form.Control
                type="text"
                value={promo}
                onChange={(e) => {
                  setPromo(e.target.value);
                }}
                placeholder="Enter promo code"
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              disabled={discount}
              onClick={(e) => {
                e.preventDefault();
                if (promo === "10%") {
                  setDiscount(true);
                  props.applyPromo();
                } else {
                  alert("Promo code invalid");
                  setPromo("");
                }
              }}
              block
            >
              Apply
            </Button>
          </Form>
        </Collapse>
      </div>
    </Row>
  );
}

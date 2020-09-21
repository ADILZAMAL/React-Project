import { Button, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import Navbar from "./NavBar";
import { addContact } from "../store/contact";
import store from "../store/configureStore";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
export default function AddContact() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    store.dispatch(
      addContact({
        id: shortid.generate(),
        name,
        email,
        phone,
      })
    );
    history.push("/");
  };
  return (
    <div>
      <Navbar navbrand="Add Contact" />
      <Card className="m-2 m-md-5">
        <Card.Header>Enter your details</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Contact
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

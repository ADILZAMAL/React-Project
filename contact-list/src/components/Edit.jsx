import { Button, Card, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Navbar from "./NavBar";
import store from "../store/configureStore";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updateContact } from "../store/contact";
import { useDispatch, useSelector } from "react-redux";
export default function AddContact() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const contact = useSelector((store) => {
    const index = store.contacts.findIndex((contact) => {
      return contact.id == id;
    });
    return store.contacts[index];
  });
  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setPhone(contact.phone);
  }, [contact]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateContact({
        id,
        name,
        email,
        phone,
      })
    );
    history.push("/");
  };
  return (
    <div>
      <Navbar navbrand="Update Contact" />
      <Card className="m-2 m-md-5">
        <Card.Header>Update your contact</Card.Header>
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
              Update Contact
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

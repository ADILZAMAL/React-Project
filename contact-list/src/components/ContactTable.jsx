import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import store from "../store/configureStore";
import { useSelector } from "react-redux";
import Contact from "./Contact";
export default function ContactTable() {
  const contacts = useSelector((store) => store.contacts);
  return (
    <Container>
      <Row className="">
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <Contact key={idx} sl={idx + 1} contact={contact} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

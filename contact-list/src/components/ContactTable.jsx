import React from "react";
import { Col, Container, FormCheck, Row, Table } from "react-bootstrap";
import store from "../store/configureStore";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import "../style/Table.css";
export default function ContactTable() {
  const contacts = useSelector((store) => store.contacts);
  return (
    <Container>
      <Row className="">
        <Col>
          <Table striped hover className="table">
            <thead className="table__header">
              <tr className="text-center">
                <th>
                  <FormCheck type="checkbox" label="" />
                </th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <Contact key={idx} contact={contact} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

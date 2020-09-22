import React, { useState } from "react";
import { Button, Col, Container, FormCheck, Row, Table } from "react-bootstrap";
import store from "../store/configureStore";
import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectAll, removeAll, delteChecked } from "../store/contact";
import { useDispatch } from "react-redux";
import "../style/Table.css";
export default function ContactTable() {
  const checkedLenght = useSelector((store) => store.checkedId.length);
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const contacts = useSelector((store) => store.contacts);
  const checkHandler = () => {
    if (check) {
      setCheck(false);
      dispatch(removeAll());
    } else {
      dispatch(selectAll());
      setCheck(true);
    }
  };
  return (
    <Container>
      <Row className="">
        <Col className="border">
          {checkedLenght > 0 && (
            <Button
              onClick={() => {
                dispatch(delteChecked());
                setCheck(false);
              }}
              variant="danger"
              className="mb-2"
            >
              Delete
            </Button>
          )}
          <Table striped hover className="table">
            <thead className="table__header">
              <tr className="text-center">
                <th>
                  <FormCheck
                    checked={check}
                    onChange={checkHandler}
                    type="checkbox"
                    label=""
                  />
                </th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>E-mail</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <Contact checkHeader={check} key={idx} contact={contact} />
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

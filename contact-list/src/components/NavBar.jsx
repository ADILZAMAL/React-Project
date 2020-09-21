import React from "react";
import "../style/NavBar.css";
import { Button, Navbar, Container } from "react-bootstrap";
export default function NavBar() {
  return (
    <Container fluid className="p-0">
      <Navbar className="nav  justify-content-center" expand="lg" fixed="top">
        <Container className="">
          <Navbar.Brand href="#home" className="navbar__brand">
            Contact Book
          </Navbar.Brand>
          <Button variant="light" className="ml-auto">
            Create Contact
          </Button>
        </Container>
      </Navbar>
    </Container>
  );
}

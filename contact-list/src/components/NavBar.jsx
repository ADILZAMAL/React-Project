import React from "react";
import "../style/NavBar.css";
import { Button, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <Container fluid className="p-0">
      <Navbar className="nav  justify-content-center" expand="lg" fixed="top">
        <Container className="">
          <Navbar.Brand href="#home" className="navbar__brand">
            {props.navbrand}
          </Navbar.Brand>
          {props.navbrand === "Contact Book" && (
            <Link to="/contact/add">
              <Button variant="light" className="ml-auto">
                Create Contact
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </Container>
  );
}

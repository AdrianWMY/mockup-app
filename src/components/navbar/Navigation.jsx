import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Navigation.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

/*
 *Navigation Bar component
 */
function Navigation() {
  return (
    <Navbar>
      <Container>
        <Col xs lg="4">
          <Navbar.Brand href="#home">PricesPeoplePay</Navbar.Brand>
        </Col>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
            <Nav.Link href="#car2Cash">Car2Cash</Nav.Link>
            <Nav.Link href="#valuations">Valuations</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Col>
        <Col xs lg="2">
          <Button variant="default" className="sigin-btn">
            Sign in
          </Button>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Navigation;

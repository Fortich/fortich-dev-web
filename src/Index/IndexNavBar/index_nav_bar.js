import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

/**
 * Index Nav bar.
 * @return {JSX} Index Nav bar component.
 */
export default function IndexNavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Blog Aleatorio de Internet</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/about-me">Sobre mí</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

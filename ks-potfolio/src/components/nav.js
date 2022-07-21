import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

function NavB() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className=" ms-auto">
            <Nav.Link clashref="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button onClick="window.location.href = 'https://google.com'" target='_blank'>Resume</Button>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavB;
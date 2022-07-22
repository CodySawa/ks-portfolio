import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'

function NavB() {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="opacity90">
            <Container >
                <Navbar.Brand id="brand" href="#home"><span>&lt;</span><span style={{ color: '#0d6efd' }}>k</span><span>&gt;</span></Navbar.Brand>
                <Nav className="ms-auto" >
                    <Nav.Link className="navlink" href="#about">About</Nav.Link>
                    <Nav.Link className="navlink" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
                    <Button href='https://google.com' target='_blank' class="btn btn-primary-outline">Resume</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavB;
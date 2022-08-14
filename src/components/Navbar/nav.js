import React, {useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import resume from '../../resume.pdf'

function NavB() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 750) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar variant="dark" fixed="top" className={navbar ? 'navOpacity' : ''}>
            <Container >
                <Navbar.Brand id="brand" href="#home"><span>&lt;</span><span style={{ color: '#0d6efd' }}>k</span><span>&gt;</span></Navbar.Brand>
                <Nav className="ms-auto" >
                    <Nav.Link className="navlink" href="#about">About</Nav.Link>
                    <Nav.Link className="navlink" href="#projects">Projects</Nav.Link>
                    <Nav.Link className="navlink" href="#contact">Contact</Nav.Link>
                    <Button href="" target='_blank' className="btn btn-primary-outline">Resume</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavB;
import React, {useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import resume from '../resume.pdf'

function NavB() {
    const [navOpacity, setNavOpacity] = useState(false);
    const [navColor, setNavColor] = useState(false);

    const changeNavOpacity = () => {
        if(window.scrollY >= window.innerHeight - 85) {
            setNavOpacity(true);
        } else {
            setNavOpacity(false);
        }
    }

    let navO = navOpacity ? 'navOpac' : '';

    const changeNavColor = () => {
        if(window.scrollY >= window.innerHeight) {
            setNavColor(true);
        } else {
            setNavColor(false);
        }
    }

    let navC = navColor ? 'navColor' : '';

    window.addEventListener('scroll', changeNavOpacity);
    window.addEventListener('scroll', changeNavColor);

    return (
        <Navbar variant="dark" fixed="top" className={` ${navO} ${navC} `}>
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
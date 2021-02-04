import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navmenu.scss';


const Navmenu = () => {
    const initialMobile = window.innerWidth <= 600 ? true : false;

    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth <= 600) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    const leafLogo =    <Nav className="ml-auto">
                            <Navbar.Text className="nav-text">
                                <i className="fas fa-leaf nav-logo"></i>
                            </Navbar.Text>
                        </Nav>

    window.addEventListener("resize", handleResize);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand href="/" className="nav-brand">
                    Aspen Industrial Machines
                </Navbar.Brand>
                <Navbar.Toggle className="nav-toggle" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
                        <Nav.Link href="/equipment" className="nav-link">Equipment</Nav.Link>
                        <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                    </Nav>
                    {mobile ? null : leafLogo}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navmenu;
import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logoWhiteText from '../../images/logoWhiteText.png';
import leaf from '../../images/leaf.png';
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

    const aspenLeaf =   <Nav className="ml-auto">
                            <Navbar.Text className="nav-text">
                                <img src={leaf} className="nav-leaf-logo"/>
                            </Navbar.Text>
                        </Nav>

    window.addEventListener("resize", handleResize);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="nav-bar-main">
                <Navbar.Brand href="/" className="nav-brand">
                    <img src={logoWhiteText} className="nav-logo-text" />
                </Navbar.Brand>
                <Navbar.Toggle className="nav-toggle" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link href="/services" className="nav-link">Services</Nav.Link>
                        <Nav.Link href="/equipment" className="nav-link">Equipment</Nav.Link>
                        <Nav.Link href="/contact" className="nav-link">Contact</Nav.Link>
                    </Nav>
                    {mobile ? null : aspenLeaf}
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navmenu;

/*
<div className="nav-brand-text-container">
                        <div className="nav-brand-aspen">
                            ASPEN INDUSTRIAL
                        </div>
                        <div className="nav-brand-machines">
                            <div><hr className="nav-brand-line"/></div> 
                            <div> &nbsp; MACHINES &nbsp; </div>
                            <div><hr className="nav-brand-line"/></div>
                        </div>
                    </div>
*/
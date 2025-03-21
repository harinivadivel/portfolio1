import React, { useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" bg="success" variant="dark" fixed="top" expanded={expanded}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          {/* <img src={logo} alt="Logo" height="30" width="30" /> */}
          <h1 className="fs-3 fst-italic fw-bolder">HV.</h1>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-light">
            <Nav.Link as={Link} to="home" smooth={true} offset={-50} duration={500} onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} offset={-50} duration={500} onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="resume" smooth={true} offset={-50} duration={500} onClick={() => setExpanded(false)}>Resume</Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} offset={-50} duration={500} onClick={() => setExpanded(false)}>Contact</Nav.Link>
            <Nav.Link as={Link} to="connect" smooth={true} offset={-10} duration={500} onClick={() => setExpanded(false)}>Connect</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            );
            };
            export default CustomNavbar;
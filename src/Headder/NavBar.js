import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './NavigationBar.css'; // Import the custom styles below

const NavigationBar = () => {
  return (
    <Navbar bg="white" expand="lg" className="custom-navbar py-3 border-bottom">
      <Container fluid className="px-4 px-md-5">
        {/* Brand Logo */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
             src="/Mainlogo.jpeg" 
             alt="CupHop"
             className="navbar-logo"
            />
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="cuphop-navbar-nav" />

        <Navbar.Collapse id="cuphop-navbar-nav">
          {/* Centered Navigation Links */}
          <Nav className="mx-auto nav-links-container">
            <Nav.Link href="#home" className="nav-item-custom fw-bold mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#discover" className="nav-item-custom fw-bold mx-2">
              Discover
            </Nav.Link>
            <Nav.Link href="#how-it-works" className="nav-item-custom fw-bold mx-2">
              How It Works
            </Nav.Link>
            <Nav.Link href="#for-cafes" className="nav-item-custom fw-bold mx-2">
              For Cafés
            </Nav.Link>
            <Nav.Link href="#about" className="nav-item-custom fw-bold mx-2">
              About
            </Nav.Link>
          </Nav>

          {/* Right Action Button */}
          <Nav className="ms-auto align-items-center">
            <Button className="btn-join-waitlist fw-bold px-4 py-2 rounded-pill">
              Join Waitlist
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
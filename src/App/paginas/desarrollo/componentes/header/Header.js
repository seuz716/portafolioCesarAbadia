import React from "react";
import "./header.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
        <Container>  
          <Navbar.Brand href="/">Inicio</Navbar.Brand>  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav className="me-auto">  
              <Nav.Link href="/desarrollo">Link 1</Nav.Link>  
              <Nav.Link href="#pricing">Link 2</Nav.Link>  
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>  
                <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
                <NavDropdown.Divider />  
                <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
              </NavDropdown>  
            </Nav>  
            <Nav>  
              <Nav.Link href="#deets">Another Link</Nav.Link>  
              <Nav.Link eventKey={2} href="#memes">  
                Another Link  
              </Nav.Link>  
            </Nav>  
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>
  );
}

export default header;

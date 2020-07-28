import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import './NavMenu.css';


const NavMenu = () => {
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">XXX Städfirma AB</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100">
          <LinkContainer className="ml-2" to={'/'} exact>
            <NavItem>
              <Button variant="outline-primary border-0">
                Hem
              </Button>
            </NavItem>
          </LinkContainer>
          <LinkContainer className="ml-2" to={'/calculate'}>
            <NavItem>
              <Button variant="outline-primary border-0">
                Räkna
              </Button>
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavMenu;

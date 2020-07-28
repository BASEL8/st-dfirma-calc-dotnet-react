import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <div className="h-100 d-flex flex-column align-items-stretch">
        <div>
          <NavMenu />
        </div>
        <div className="flex-grow-1">
          {children}
        </div>
      </div>
    </Container>
  );
}
export default Layout;

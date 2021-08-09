import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstarp';
import Styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav classname="ml-auto">
          <Nav.item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.item>
          <Nav.item>
            <Nav.Link>
              <Link to="/">About</Link>
            </Nav.Link>
          </Nav.item>
          <Nav.item>
            <Nav.Link>
              <Link to="/"> Contact</Link>
            </Nav.Link>
          </Nav.item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

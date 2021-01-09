import React from "react";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/cart" className="nav-link">
                <NavItem>
                  <i className="fas fa-shopping-cart"></i>Cart
                </NavItem>
              </Link>
              <Link to="/login" className="nav-link">
                <NavItem>
                  <i className="fas fa-user"></i>Sign In
                </NavItem>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

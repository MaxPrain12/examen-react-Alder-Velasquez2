import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { PaginasApp } from '../data/PaginasApp';
import { Link } from 'react-router-dom';

class NavBaa extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              width="40"
              height="40"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {PaginasApp.map((item) => {
                return (
                  <Nav.Link as={Link} to={item.path}>
                    {item.title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBaa;

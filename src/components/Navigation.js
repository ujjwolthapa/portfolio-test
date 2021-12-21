import React from "react";
import { Navbar, Nav, Container, NavItem, NavDropdown } from "react-bootstrap";
const Navigation = () => {
  return (
    <div>
      {/* <Navbar className=" mr-8 bg-primary navbar-dark text-uppercase">
        <Container>
          <Navbar.Brand href="#home">BromX</Navbar.Brand>
          <Nav className="me-7">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#academic">Academic</Nav.Link>
            <Nav.Link href="#academic">Work</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/ujjwolthapa" target="_blank">
              <i className="fab fa-github-alt fa-lg"></i> github
            </Nav.Link>
            <Nav.Link
              href="https://www.facebook.com/profile.php?id=100015327823938"
              target="_blank"
            >
              <i class="fab fa-facebook fa-lg"></i> facebook
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BromX</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#academic">Academic</Nav.Link>
              <Nav.Link href="#academic">Work</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/ujjwolthapa" target="_blank">
                <i className="fab fa-github-alt fa-lg"></i> Github
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com/profile.php?id=100015327823938"
                target="_blank"
              >
                <i class="fab fa-facebook fa-lg"></i> facebook
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

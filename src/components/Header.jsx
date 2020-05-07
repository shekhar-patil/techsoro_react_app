import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
  state = {
    loggedIn: false
   }
  render() {
    return (
      <React.Fragment>
        <Navbar navbar="dark" bg="dark" expand="md" fixed="top">
          <Navbar.Brand href="/" className="text-white">TechSoro</Navbar.Brand>
          <Nav.Link href="/articles">Blogs</Nav.Link>
          {
            localStorage.getItem("jwt") ?
            <Nav.Link href="/logout">Log Out</Nav.Link>
            :
            <Nav.Link href="/login">Log In</Nav.Link>
          }
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;

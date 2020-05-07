import React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

class Footer extends React.Component{
  render() {
    return(
      <div className="fixed-bottom">
        <Navbar navbar="dark" bg="dark">
          <Container>
            <NavbarBrand>Courses</NavbarBrand>
            <NavbarBrand>Blogs</NavbarBrand>
            <NavbarBrand>Open Source Contribution</NavbarBrand>
            <NavbarBrand>Newsletter</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}


export default Footer;


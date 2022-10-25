import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../asets/images/fav2.png';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Image
            src={logo}
            roundedCircle
            style={{height: '50px'}}
            ></Image>
            <Link to='/' className='header-title'>Praxis Larning</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Courses</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Nav.Link href="#undi">Blog</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link><Link to="/login" className='header-title'>Log In</Link></Nav.Link>
              <Nav.Link eventKey={2}>
                <Link to="register" className='header-title'>Register</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
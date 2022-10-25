import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../../asets/images/fav2.png';
import { AuthContext } from '../../../conrtext/AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from "react-icons/fa";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () => {
    logOut()
    .then( () => {})
    .catch(error=> console.error(error))
  }

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
              <Nav.Link><Link to='/blogs'>Blogs</Link></Nav.Link>
              
             
            </Nav>
            <Nav>
              <Nav.Link>
                {
                  user?.uid ?  <>
                  <button onClick={handleLogOut} className='logOut-btn'>Log Out</button>
                  </>
                  : 
                  <div className='login-container'>
                    <Nav.Link><Link to="/login" className='header-title'>Log In</Link></Nav.Link>
                    <Nav.Link><Link to="register" className='header-title'>Register</Link></Nav.Link>
                  </div>

                }
                 
              </Nav.Link>
              <Nav.Link className='photo-url' eventKey={2}>
                {user?.photoURL ? 
                <Image
                src={user.photoURL}
                roundedCircle
                ></Image> : 
                <FaUser></FaUser>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
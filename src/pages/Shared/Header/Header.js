import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../asets/images/fav2.png';
import { AuthContext } from '../../../conrtext/AuthProvider/AuthProvider';
import './Header.css'
import { FaUser } from "react-icons/fa";
import SideNav from '../SideNav/SideNav';

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
              <Nav.Link className='title' href="#courses"><Link to='/courses'>Courses</Link></Nav.Link>
              <Nav.Link className='title' href="#blogs"><Link to='/blogs'>Blogs</Link></Nav.Link>
              <Nav.Link>
                    <Button>Drak</Button>
                    <Button>Light</Button>
              </Nav.Link>
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
              <Link to="/profile">
                {user?.photoURL ? 
                <Image
                src={user.photoURL}
                roundedCircle
                style={{height: '40px'}}
                ></Image> : 
                <FaUser></FaUser>
                }
              </Link>
            </Nav>
            <div  className='d-lg-none'>
              <SideNav></SideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;
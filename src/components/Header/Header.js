import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {RiUserLine} from 'react-icons/ri'
import './Header.css'
import { useEffect, useState } from "react";

const Header = () => {
  const [navbarClass, setNavbarClass] = useState('landing-navbar');
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY!==0){
        setNavbarClass('landing-navbar-no-top');
      }else{
        setNavbarClass('landing-navbar-top')
      }
    })
  },[])
  return (
    <header>
      <Navbar className={navbarClass} >
        <Container>
          <Navbar.Brand href="#home" className="logo-app">Cripto 21i</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link navbar-button d-flex align-items-center">Log In <RiUserLine className="ms-1"/></Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

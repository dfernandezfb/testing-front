import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
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
  },[]);
  const {pathname} = useLocation();
  return (
    <header>
      <Navbar className={navbarClass} >
        <Container>
          {pathname==='/login'?
          <Navbar.Brand href="/" className="logo-app ms-auto me-auto">Cripto 21i</Navbar.Brand>
          :
          <>
          <Navbar.Brand href="/" className="logo-app">Cripto 21i</Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/login" className="nav-link primary-button btn d-flex align-items-center">Ingresar <RiUserLine className="ms-1"/></Link>
          </Nav>
          </>
          }
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

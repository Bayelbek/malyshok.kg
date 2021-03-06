import React from 'react'
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap'
import logo from '../images/CaruselImg/malyshok_edu_logo.jpg'
import '../styles/NavbarTop.css'
import Example from './Example'

const NavbarTop = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink href="/"><img src={logo} className="logo" alt=""/></NavLink>
          <Navbar.Brand href="/" style={{cursor: 'pointer'}}>ОК «МАЛЫШОК»</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
            <Nav className="m-lg-auto">
              <Nav.Link href="/">Главная</Nav.Link>
              <Nav.Link href="/kindergarten">Детский сад</Nav.Link>
              <Nav.Link href="/teachers">Учителя</Nav.Link>
              <Nav.Link href="/education">Обучение</Nav.Link>
            </Nav>
            <Nav.Link>
              <Example/>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarTop

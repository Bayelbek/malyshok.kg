import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import logo from '../Image/CaruselImg/malyshok_edu_logo.jpg'
import '../styles/NavbarTop.css';
import HomePage from "./HomePage";
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
const NavbarTop = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                        <NavLink href='/'><img src={logo} className="logo"/></NavLink>
                        <Navbar.Brand href='/' style={{cursor: "pointer"}}>ОК «МАЛЫШОК»</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-lg-auto">
                                <Nav.Link href='/'>Главная</Nav.Link>
                                <Nav.Link href="kindergartenPage">Детский сад</Nav.Link>
                                <Nav.Link href="teachers">Учителя</Nav.Link>
                                <Nav.Link href="educationPage">Обучение</Nav.Link>
                            </Nav>
                            <Nav.Link href="home"><Button style={{backgroundColor: '#0466ad'}}>ПОСТУПИТЬ В
                                САДИК</Button></Nav.Link>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarTop;

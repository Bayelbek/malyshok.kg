import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import logo from '../Image/CaruselImg/malyshok_edu_logo.jpg'
import '../styles/NavbarTop.css';
import ImgCarousel from "../containers/ImgCarousel";

const NavbarTop = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <NavLink to="/" ><img  src={logo} className="logo"/></NavLink>
                    <Navbar.Brand href="#home">«МАЛЫШОК»</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-lg-auto">
                            <Nav.Link href="home">Главная</Nav.Link>
                            <Nav.Link href="home">Детский сад</Nav.Link>
                            <Nav.Link href="home">Учителя</Nav.Link>
                            <Nav.Link href="home">Обучение</Nav.Link>
                        </Nav>
                        <Nav.Link href="home"><Button style={{backgroundColor: '#0466ad'}}>ПОСТУПИТЬ В САДИК</Button></Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ImgCarousel/>
        </div>
    );
};

export default NavbarTop;

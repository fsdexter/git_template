// header react component with home page link, language picker and login button
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button'
import styles from './header.module.css'


export default function Header() {
  return (
    <Navbar bg="light" expand="lg"  >
        <Container fluid>
            <Navbar.Brand href="#home">Fair car rent</Navbar.Brand>
            {/* <div className="btn btn-danger float-end">TEST</div>
            <button className="btn btn-primary m-3" >Button Primary</button> */}
            <div className={styles.left}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Languages" id="basic-nav-dropdown" className="">
                            <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Button>Log in</Button>
            </div>

        </Container>
    </Navbar>
  );
}

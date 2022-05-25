// header react component with home page link, language picker and login button
import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styles from './header.module.css'

export default function Header() {
    return (
        <Container>
            <Row className>
                <div className={styles.header}r>
                    <div className={styles.right}>
                        <a href="/">
                            Fair car rent
                        </a>
                    </div>
                    <div className={styles.left}>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                languages
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="primary">Login</Button>
                    </div>
                </div>
                
            </Row>
        </Container>
    );
}

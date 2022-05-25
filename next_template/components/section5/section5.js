import React from 'react';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import styles from './section5.module.css'

export default function Section5() {
    return (
        <Container>
            <div className="card mb-3">
                <Row>
                    <Col>
                        <div className={styles.padding}>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Button variant="primary" size="sm">
                            Small button
                            </Button>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="img-fluid rounded-start" alt="..."/>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

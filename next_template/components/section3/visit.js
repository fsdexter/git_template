import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import styles from './visit.module.css';

export default function Visit () {  
    return (
        <Container>
            <div className={styles.box}>
                <Container className="justify-content-center position-relative top-50 ">
                    <Row>TEXT H1</Row>
                    <Row>text h6</Row>
                    
                        <Button variant="primary" size="sm">
                            Small button
                        </Button>
                    
                </Container>
            </div>
        </Container>
    );
}
// }

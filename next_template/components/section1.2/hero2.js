import React from 'react';
import styles from './hero2.module.css'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';

export const Hero2 = () => {
    return (
    
        <div className={styles.box}>
            <Container className="justify-content-center position-relative top-50 ">
                <Row className="justify-content-center">TEXT</Row>
                <Row>SEARCH BAR</Row>
                <Row >CHECK BOX</Row>                
            </Container>
        </div>
        
    );
}
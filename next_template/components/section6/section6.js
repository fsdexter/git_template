import React from "react";
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'



export const Section6 = props => {
	const data = [
                {
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    title: "Cat 1",
                },
                {
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    title: "Cat 2",
                },
                {
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    title: "Cat 3",
                },
                {
                    img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                    title: "Cat 4",
                }
                
            ]

	return (
        <Container>
            <Row  className="g-4">
                {data.map((card, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={card.img} />
                            <Card.Body>
                                <Card.Title>{card.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
	);
};
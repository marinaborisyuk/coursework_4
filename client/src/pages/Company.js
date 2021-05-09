import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';

const Company = () => {
    return (
        <Container>
            <Row className = "mt-3">
                <Col md={4}>
                    <TypeBar/>
                </Col>
                <Col md={8}>

                </Col>
            </Row>
        </Container>
    );
};

export default Company;
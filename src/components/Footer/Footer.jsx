import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer(props) {
    return(
            <Container fluid>
                <Row>
                    <Col ><h6 className="text-center">Clone Tube Copyright 2021</h6></Col>
                </Row>
            </Container>
    )
}

export default Footer;
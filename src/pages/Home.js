import React from 'react';
import Navigation from "../Navigation";
import { Navbar, Nav, Container, NavDropdown, Form, Button, Col, Row, Card } from 'react-bootstrap';
import Address from '../components/Address';

function Home() {
    return (
        <div>
            <Navigation />
            <br/>
        <Container>
        <Row className="justify-content-md-center">
            <Col>
              <h4 className="pagetitle">Welcome Eco</h4>
              <br/>
              <Address />
            </Col>
          </Row>
        </Container>
        </div>
    );
};

export default Home;

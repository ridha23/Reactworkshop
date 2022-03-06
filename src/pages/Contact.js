import React from 'react';
import "../App.css";
import Navigation from "../Navigation";
import { Navbar, Nav, Container, NavDropdown, Form, Button, Col, Row } from 'react-bootstrap';


function Contact() {
    return (
      <div>
        <Navigation />
        <br/>
        <Container>
        <Row className="justify-content-md-center">
            <Col>
              <h4 className="pagetitle">Call Us</h4>
              <br/>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Contact;
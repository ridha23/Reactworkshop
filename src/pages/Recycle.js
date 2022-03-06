import React from 'react';
import Navigation from "../Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Col, Row } from 'react-bootstrap';

function Recycle() {
    return (
        <div>
        <Navigation />
        <br/>
    <Container>
    <Row className="justify-content-md-center">
        <Col>
          <h4 className="pagetitle">Recycle</h4>
          <br/>
          <Form>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Recycle Items
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Items" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
      Destination
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Destination" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row} className="mb-3">
      <Form.Label as="legend" column sm={2}>
        Radios
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Battery"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Radio Active"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Plastic"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
  </fieldset>
  <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
    <Col sm={{ span: 10, offset: 2 }}>
      <Form.Check label="Call me first" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 2 }}>
      <Button variant="success" type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
        </Col>
      </Row>
    </Container>
    </div>
    );
};

export default Recycle;
import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, Col, Row, Card } from 'react-bootstrap';
import FullName from './FullName';
import ProfilePhoto from './ProfilePhoto';

const Address = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"/><ProfilePhoto />
            <Card.Body>
                <Card.Title>
                        <FullName />
                </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="success">Show Profile</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Address;
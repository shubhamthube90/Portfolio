import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Signup() {
  return (
    <Container className="mt-5">
      <h2 className="section-title">Signup</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
       <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Button variant='primary'>Send</Button>
        
      </Form>
    </Container>
  );
}

export default Signup;
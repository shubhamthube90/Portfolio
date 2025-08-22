import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Skill() {
  return (
    <Container className="pt-5">
      <h2 className="section-title">🛠Skills</h2>
      <Row>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5 className="text-primary">HTML & CSS</h5>
            <p>Modern UI / Responsive Design</p>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="p-3 text-center">
            <h5 className="text-success">JavaScript</h5>
            <p>ES6, DOM, Async/Await</p>
          </Card>
        </Col>
        <Col md={3}>
        <Card className="p-3 text-center">
          <h5 className="text-danger">
            React
          </h5>
          <p>
            Hooks, Routing, Context
          </p>
        </Card>
      </Col>
      <Col md={3}>
        <Card className="p-3 text-center">
          <h5 className="text-warning">
            Spring Boot
          </h5>
          <p>
            REST APIs, JPA, Validation
          </p>
        </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default Skill;
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FeatureProduct() {
  return (
    <Container className="text-center" fluid={true}>
      <div className="section-title">
        <h2>Featured Product</h2>
        <p>Some of our feature products you may also like</p>
      </div>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

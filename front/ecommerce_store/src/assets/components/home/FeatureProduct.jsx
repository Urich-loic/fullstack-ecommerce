import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function FeatureProduct() {
  return (
    <Container className="text-center" fluid={false}>
      <div className="section-title">
        <h2>Featured Product</h2>
        <p>Some of our feature products you may also like</p>
      </div>
      <Row className="">

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag6.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag7.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag6.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag8.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag6.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>

        <Col className="p-1" xl={2} lg={2} sm={4} xs={6} md={3}>
          <Card className="card">
            <div className="image-box">
              <img src="/src/assets/images/imag6.webp" alt="" />
            </div>
            <Card.Body>
              <p className="product-name-on-card">Ai+ Pulse (Purple, 64 GB)</p>
              <p className="product-price-on-card">$ 300</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

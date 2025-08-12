import React from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

export default function Favorite() {
  return (
    <div className="content">
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2> MY FAVOURITE ITEMS</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>

        <Row className="d-flex justify-center items-center">
          <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag6.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
              <Button className="btn btn-sm">
                {" "}
                <span class="material-symbols-outlined">
                  delete
                </span> Remove{" "}
              </Button>
            </Card>
          </Col>

          <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag6.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
              <Button className="btn btn-sm">
                {" "}
                <span class="material-symbols-outlined">
                  delete
                </span> Remove{" "}
              </Button>
            </Card>
          </Col>

         <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag6.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
              <Button className="btn btn-sm">
                {" "}
                <span class="material-symbols-outlined">
                  delete
                </span> Remove{" "}
              </Button>
            </Card>
          </Col>

          <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag6.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
              <Button className="btn btn-sm">
                {" "}
                <span class="material-symbols-outlined">
                  delete
                </span> Remove{" "}
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

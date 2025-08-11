import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";



export default function Collection() {
  return (
    <div>
      <Container>
        <div className="section-title">
        <h2>Products Collection</h2>
        <p>Some of our products collection you may also like</p>
      </div>
        <Row>
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
            </Card>
          </Col>
           <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag8.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
            </Card>
          </Col>
           <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag11.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
            </Card>
          </Col>
           <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag9.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
            </Card>
          </Col>
           <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card">
              <div className="image-box">
                <img src="/src/assets/images/imag10.webp" alt="" />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  Ai+ Pulse (Purple, 64 GB)
                </p>
                <p className="product-price-on-card">$ 300</p>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

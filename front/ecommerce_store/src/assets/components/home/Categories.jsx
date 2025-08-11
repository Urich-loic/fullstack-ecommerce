import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";

export default function Categories() {
  return (
    <div>
      <Container className="text-center" fluid={true}>
        <div className="section-title">
          <h2>Categories</h2>
          <p>Some of our categories you may also like</p>
        </div>
        <Row>
          <Col key={1} xl={6} lg={6} md={6} sm={12} xs={12}>
            <Row className="p-0 gap-0">
              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body className="">
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Mobile</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Electronic</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Gadget</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Groceries</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Row>
              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body className="">
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Travel</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Beauty</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Offers Zone</h3>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="p-0" xl={3} lg={3} md={3} sm={2} xs={6}>
                <Card className="h-100 w-100 text-center">
                  <Card.Body>
                    <div className="image-box mb-2">
                      <img src="/src/assets/images/imag6.webp" alt="" />
                    </div>
                    <h3 className="category-name"> Mobile</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import MegaMenu from "./MegaMenu";
import HomeSliders from "./HomeSlider";

export default function HomeTop() {
  return (
    <div className="mt-5">
      <Container fluid={true}>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <MegaMenu />
          </Col>
          <Col lg={9} md={12} sm={12}>
            <HomeSliders />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

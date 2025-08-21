import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="content">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="d-flex mb-5">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>About</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <h1 className="text-left">About</h1>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit dolores soluta quibusdam obcaecati
              commodi, accusantium laboriosam vel, enim iste itaque quidem,
              maiores placeat amet provident deleniti aut a cum eius! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit dolores soluta quibusdam obcaecati
              commodi, accusantium laboriosam vel, enim iste itaque quidem,
              maiores placeat amet provident deleniti aut a cum eius! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius!
            </p>

            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit dolores soluta quibusdam obcaecati
              commodi, accusantium laboriosam vel, enim iste itaque quidem,
              maiores placeat amet provident deleniti aut a cum eius! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius!
            </p>

            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit dolores soluta quibusdam obcaecati
              commodi, accusantium laboriosam vel, enim iste itaque quidem,
              maiores placeat amet provident deleniti aut a cum eius!
            </p>
            <p className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              dolores soluta quibusdam obcaecati commodi, accusantium laboriosam
              vel, enim iste itaque quidem, maiores placeat amet provident
              deleniti aut a cum eius! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit dolores soluta quibusdam obcaecati
              commodi, accusantium laboriosam vel, enim iste itaque quidem,
              maiores placeat amet provident deleniti aut a cum eius!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="content">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="d-flex mb-5">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={"/"}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Purchase policy</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col>
            <h1 className="text-left">Terms of use</h1>
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

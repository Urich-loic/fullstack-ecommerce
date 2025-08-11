import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "../../css/FooterDesktop.css";
import { Link } from "react-router-dom";
import download from "../../images/download.png";
import logo from "../../../../public/logo.png";

export default function FooterDesktop() {
  return (
    <div className="py-5 footerback">
      <Container fluid={false}>
        <Row>
          <Col xl={3} lg={3} md={3} sm={6} xs={6} className="text-left mb-5">
            <Link className="footer-link p-0" to={"#"}>
              <img src={logo} width={160} className="logo" />
            </Link>
          </Col>

          <Col xl={3} lg={3} md={3} sm={6} xs={6} className="">
            <h5 className="footer-menu-title text-left">Office adress</h5>
            <ul className="p-0">
              <li>
                <Link className="footer-link" to={"#"}>
                  NovaTech Solutions
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"#"}>
                  contact@novatechsolutions.com
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"#"}>
                  452 Innovation Drive, Douala, Cameroon
                </Link>
              </li>
            </ul>
          </Col>

          <Col xl={3} lg={3} md={3} sm={6} xs={6} className="">
            <h5 className="footer-menu-title text-left">Policy</h5>
            <ul className="p-0">
              <li>
                <Link className="footer-link" to={"#"}>
                  Refund policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"#"}>
                  Shipping policy
                </Link>
              </li>
              <li>
                <Link className="footer-link" to={"#"}>
                  Terms of use
                </Link>
              </li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={3} sm={6} xs={6} className="">
            <h5 className="footer-menu-title text-left">Download App</h5>
            <ul className="p-0">
              <li>
                <Link className="footer-link p-0" to={"#"}>
                  <img src={download} width={200} />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

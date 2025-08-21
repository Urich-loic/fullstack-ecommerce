import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import login from "../../images/login.jpg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      <Container className="my-5 h-screen">
        <Row className="login-row">
          <Col lg={12} md={12} sm={12}></Col>

          <Col lg={6} md={6} sm={12} className="d-flex login-section">
            <form action="" className="text-left w-100 p-3">
              <h4>USER REGISTER</h4>

              <br />
              <Form.Control
                size="lg"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-100"
              />

              <br />
              <Form.Control
                size="lg"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-100"
              />

              <br />
              <Form.Control
                size="lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-100"
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-4"
              >
                Register
              </button>
              <p className="mt-3">
                Already have an account ?{" "}
                <Link to="/login" className="text-primary">
                  Signin
                </Link>
              </p>
            </form>
          </Col>

          <Col lg={6} md={6} sm={6} className="Desktop login-image">
            <img src={login} alt="" className="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";

export default function Contact() {
  return (
    <div className="content">
      <Container className="my-5 h-screen">
        <Row className="login-row space-x-1">
          <Col lg={6} md={6} sm={12} className="d-flex login-section">
            <form action="" className="text-left w-100">
              <h4>Contact us</h4>
              <label htmlFor="phone" className="mb-3">
                Get in touche with us
              </label>
              <br />
              <Form.Control
                size="lg"
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="w-100"
              />
              <br />
              <Form.Control
                size="lg"
                type="email"
                name="phone"
                placeholder="Enter your phone number"
                className="w-100"
              />
              <br />
              <Form.Control
                size="lg"
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary px-4 py-2 rounded-4"
              >
                Login
              </button>
            </form>
          </Col>

          <Col lg={6} md={6} sm={12} className="text-center">
            <h5 className="text-left">
              452 Innovation Drive, Douala, Cameroon
            </h5>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.77816091594!2d2.2646331828245025!3d48.858938485157594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2scm!4v1754929580588!5m2!1sen!2scm"
                width="600"
                height="350"
                styles="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

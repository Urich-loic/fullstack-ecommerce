import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import axios from "axios";
import FormModal from "../formModal/formModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {Link} from 'react-router-dom'

export default function Contact() {
  const [formDtata, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modalState, setModalState] = useState(false);
  const sentBtn = document.getElementById("sendBtn");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formDtata.name.length === 0) {
      toast.error("Please write your message");
      alert("You must enter your name");
    } else if (formDtata.email.length === 0) {
      alert("You must enter your email");
    } else if (formDtata.message.length === 0) {
      alert("You must enter a message");
    } else {
      sentBtn.innerHTML = "Sending Message...";
    }

    try {
      axios
        .post("/contact", formDtata)
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            handleModal();

            sentBtn.innerHTML = "Message sent";
            const contactForm = document.getElementById("contactForm");
            contactForm.reset();
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div>
      <Container className="my-5 h-screen">
        <Row className="login-row space-x-1">
          <Col lg={12} md={12} sm={12} className="d-flex mb-5">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={'/'}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item >
                Contact
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col lg={6} md={6} sm={12} className="d-flex login-section">
            <form
              id="contactForm"
              onSubmit={(e) => handleSubmit(e)}
              className="text-left w-100"
            >
              <h4>Contact us</h4>
              <label htmlFor="phone" className="mb-3">
                Get in touche with us
              </label>
              <br />
              <Form.Control
                size="lg"
                type="text"
                name="name"
                onChange={(e) => {
                  setFormData({
                    ...formDtata,
                    name: e.target.value,
                  });
                }}
                placeholder="Enter your name"
                className="w-100"
              />
              <br />
              <Form.Control
                size="lg"
                type="email"
                name="email"
                onChange={(e) => {
                  setFormData({
                    ...formDtata,
                    email: e.target.value,
                  });
                }}
                placeholder="Enter your email"
                className="w-100"
              />
              <br />
              <Form.Control
                size="lg"
                as="textarea"
                name="message"
                onChange={(e) => {
                  setFormData({
                    ...formDtata,
                    message: e.target.value,
                  });
                }}
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
              <br />
              <button
                id="sendBtn"
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
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </p>
          </Col>
        </Row>
      </Container>
      <FormModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
}

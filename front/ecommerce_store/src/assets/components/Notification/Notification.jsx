import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import SliderLoading from "../Placeholder/SliderLoading";

export default function Notification({
  notifications,
  isLoading,
  mainComponent,
}) {
  const [show, setShow] = useState(false);
  const [notifMessage, setNotifMessage] = useState();
  const [notifTitle, setNotifTitle] = useState();
  const [notifDate, setNotifDate] = useState();
  const [status, setStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setNotifMessage(e.target.getAttribute('data-message'))
    setNotifTitle(e.target.getAttribute('data-title'))
    setNotifDate(e.target.getAttribute('data-date'))
    setStatus(true);
  }

  return (
    <div className="">
      <Container className="TopSection">
        <SliderLoading isLoading={isLoading} />
        <Row className={mainComponent}>
          {notifications?.map((notification, index) => (
            <Col key={index} className=" p-1 " md={6} lg={6} sm={12} xs={12}>
              <Card onClick={(e) => handleShow(e)} className="notification-card">
                <Card.Body>
                  <h6> {notification.title}</h6>
                  <p className="py-1  px-0 text-primary m-0">
                    <span class="material-symbols-outlined">notifications</span>{" "}
                    {Date(notification.created_at)} | Status: {status ? "read":"Unread"}
                  </p>
                </Card.Body>
                <button
                  data-title={notification.title}
                  data-date={notification.created_at}
                  data-message={notification.message}
                  className={`btn ${status ? "btn-success":"btn-primary"} btn-sm`}
                >
                  Details
                </button>
              </Card>

              <Modal show={show} onHide={() => handleClose()}>
                <Modal.Header closeButton>
                  <h6>
                    <span class="material-symbols-outlined">notifications</span>{" "}
                    Date:{notifDate}
                  </h6>
                </Modal.Header>
                <Modal.Body>
                  <h6> {notifTitle}</h6>
                  <p>{notifMessage}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => handleClose()}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Form from "react-bootstrap/Form";
import login from '../images/login.jpg'
export default function UserLogin() {
  return (
    <>
      <div className="content">
        <Container className="my-5 h-screen">
          <Row  className="login-row">
            <Col lg={12} md={12} sm={12}></Col>

            <Col lg={6} md={6} sm={12} className="d-flex login-section">
              <form action="" className="text-left w-100">
                <h4>USER LOGIN</h4>
                <label htmlFor="phone" className="mb-3">Enter your phone number</label>
                 <br />
                <Form.Control
                  size="lg"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="w-100"
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

            <Col lg={6} md={6} sm={6} className="Desktop login-image">
            <img src={login} alt=""className="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
import gsap from "gsap";


export default function HeaderMobile() {

  let location = useLocation();

  useEffect(() => {
    gsap.fromTo(".content", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
  }, [location]);


  const accordions = [
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
    { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  ];

  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary mb-3 py-3"
          fixed="top"
        >
          <Container fluid>
            <Row className="flex w-100 justify-between">
              <Col xl={4} md={4} sm={6} xs={6} className="text-left">
                <Link to="/" className="nav-logo">
                  <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline align-top border-radius"
                  />{" "}
                </Link>
              </Col>

              <Col xl={4} md={4} sm={6} className="searchBarDesktop">
                <div className="d-flex searchContainer gap-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a product"
                  />
                  <button
                    type="button"
                    className="btn site-btn rounded-b-full border overflow-hidden"
                  >
                    <span class="material-symbols-outlined search-btn">
                      search
                    </span>
                  </button>
                </div>
              </Col>

              <Col xl={4} md={4} sm={6} className="text-right header-icons">
                <Link to="/notification" className="btn">
                  <span class="material-symbols-outlined">notifications</span>
                  <span className="badge text-white bg-danger">2</span>
                </Link>

                <Link to="" className="btn">
                  <span class="material-symbols-outlined">settings_phone</span>
                </Link>

                <button className="btn cart btn">
                  <span class="material-symbols-outlined">shopping_cart</span>
                  <span className="badge text-white bg-danger">2</span>
                </button>

                <Link to="/login" className="btn">
                  Login
                </Link>
              </Col>

              {/* Mobile menu  */}

              <Col sm={4} xs={6} className="text-right">
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  className="mobile-toggle"
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <Link to="/" className="nav-logo">
                        <img
                          alt=""
                          src={logo}
                          width="50"
                          height="50"
                          className="d-inline align-top border-radius"
                        />{" "}
                      </Link>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Accordion className="accordionMenuDivMobile">
                        {accordions.map((accordion, index) => (
                          <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header>
                              {" "}
                              <img
                                src="/src/assets/images/image.png"
                                alt=""
                                className="accordionMenuIcon m-1"
                              />{" "}
                              {accordion.title}
                            </Accordion.Header>
                            <ul>
                              {accordion.content.map(
                                (surAccordion, subIndex) => (
                                  <Accordion.Body
                                    key={subIndex}
                                    className="border-y"
                                  >
                                    {surAccordion}
                                  </Accordion.Body>
                                )
                              )}
                            </ul>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                      <Link to="/login" className="btn text-left">
                        Login
                      </Link>
                    </Nav>
                    <div className="d-flex searchContainer gap-3 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a product"
                      />
                      <button
                        type="button"
                        className="btn site-btn rounded-b-full border overflow-hidden"
                      >
                        <span class="material-symbols-outlined search-btn">
                          search
                        </span>
                      </button>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Col>
            </Row>
          </Container>
        </Navbar>
      ))}
    </>
  );
}



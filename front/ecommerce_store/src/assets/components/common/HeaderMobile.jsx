import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.png";
import burgerBar from "/burgerBar.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import axios from "axios";

export default function HeaderMobile() {
  const [searchedItem, setSearchedItem] = useState();
  const naivate = useNavigate();

  let location = useLocation();
  const [megaMenuState, setMegaMenuState] = useState(false);
  const [notifications, setNotifications] = useState(null);
  const handleMega = () => {
    setMegaMenuState(!megaMenuState);
  };

  const convertToString = (catName) => {
    const newCatName = catName.split(" ").join("-");
    return newCatName.toLowerCase();
  };

  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    try {
      axios
        .get("categories")
        .then(function (response) {
          // console.log(response);
          setCategories(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  const getNotification = () => {
    try {
      axios
        .get("/notification")
        .then(function (response) {
          setNotifications(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    naivate(`/search-result/${searchedItem}`);
   
  };

  useEffect(() => {
    getCategories();
    getNotification();
    gsap.fromTo(".content", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
  }, [location]);

  // const accordions = [
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  //   { title: " Men's clothing", content: ["Carrot", "Lettuce", "Tomato"] },
  // ];

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
              <Col
                xl={4}
                md={3}
                sm={6}
                xs={6}
                className="text-left d-flex gap-2"
              >
                <div className="relative">
                  <img
                    alt=""
                    src={burgerBar}
                    width="40"
                    height="40"
                    className="d-inline align-top border-radius"
                    onClick={() => handleMega()}
                  />{" "}
                  <Accordion
                    className="accordionMenuDiv overflow-visible bg-tertiary absolute"
                    style={{
                      width: "250px",
                      display: megaMenuState ? "inline-block" : "block",
                      position: "absolute",
                      left: megaMenuState ? "0" : "-100%",
                      transition: "all 0.5 ease-in-out",
                      top: "90%",
                      height: "100vh",
                      background: "white",
                      border: "0 !important",
                    }}
                  >
                    {categories.map((category, index) => (
                      <Accordion.Item key={index} eventKey={index}>
                        <Link
                          to={`/${convertToString(category.cat_name)}`}
                          className="product-name-on-card"
                        >
                          <Accordion.Header>
                            {" "}
                            <img
                              src="/src/assets/images/image.png"
                              alt=""
                              className="accordionMenuIcon m-1"
                            />{" "}
                            {category.cat_name}
                          </Accordion.Header>
                        </Link>
                        <ul
                          style={{
                            padding: "0",
                          }}
                        >
                          {category.sub_cat_name.map(
                            (subCategories, subIndex) => (
                              <Accordion.Body
                                key={subIndex}
                                className="border-y"
                                style={{
                                  borderBottom: "1px solid #ccc",
                                  padding: "10px 15px",
                                }}
                              >
                                <span>
                                  <Link
                                    to={`/${convertToString(
                                      category.cat_name
                                    )}/${convertToString(
                                      subCategories.sub_cat_name
                                    )}`}
                                    className="product-name-on-card"
                                  >
                                    {subCategories.sub_cat_name}
                                  </Link>
                                </span>
                              </Accordion.Body>
                            )
                          )}
                        </ul>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>

                <Link to="/" className="nav-logo">
                  <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline align-top border-radius"
                  />
                </Link>
              </Col>

              <Col xl={4} md={3} sm={6} className="searchBarDesktop">
                <div className="d-flex searchContainer gap-3">
                  <form
                    onSubmit={(e) => {
                      handleSubmit(e);
                    }}
                    className="d-flex gap-1"
                  >
                    <input
                      onChange={(e) => setSearchedItem(e.target.value)}
                      name="searchedProduct"
                      className="form-control"
                      placeholder="Search for a product"
                    />
                    <button
                      type="submit"
                      className="btn site-btn rounded-b-full border overflow-hidden"
                    >
                      <span className="material-symbols-outlined search-btn">
                        search
                      </span>
                    </button>
                  </form>
                </div>
              </Col>

              <Col xl={4} md={6} sm={6} className="text-right header-icons">
                <Link to="/notification" className="btn">
                  <span className="material-symbols-outlined">
                    notifications
                  </span>
                  <span className="badge text-white bg-danger">
                    {notifications && Number(notifications.length)}
                  </span>
                </Link>

                <Link to="/favorite" className="btn">
                  <span className="material-symbols-outlined">favorite</span>
                  <span className="badge text-white bg-danger">2</span>
                </Link>

                <Link to="" className="btn">
                  <span className="material-symbols-outlined">
                    settings_phone
                  </span>
                </Link>

                <Link to="/cart" className="btn">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  <span className="badge text-white bg-danger">2</span>
                </Link>

                <Link to="/profile" className="btn">
                  Profile
                </Link>
                 <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/register" className="btn">
                  Register
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
                        {categories.map((category, index) => (
                          <Accordion.Item key={index} eventKey={index}>
                            <Link
                              to={`/${convertToString(category.cat_name)}`}
                              className="product-name-on-card"
                            >
                              <Accordion.Header>
                                {" "}
                                <img
                                  src="/src/assets/images/image.png"
                                  alt=""
                                  className="accordionMenuIcon m-1"
                                />{" "}
                                {category.cat_name}
                              </Accordion.Header>
                            </Link>
                            <ul
                              style={{
                                padding: "0",
                              }}
                            >
                              {category.sub_cat_name.map(
                                (subCategories, subIndex) => (
                                  <Accordion.Body
                                    key={subIndex}
                                    className="border-y"
                                    style={{
                                      borderBottom: "1px solid #ccc",
                                      padding: "10px 15px",
                                    }}
                                  >
                                    <Link
                                      to={`/${convertToString(
                                        category.cat_name
                                      )}/${convertToString(
                                        subCategories.sub_cat_name
                                      )}`}
                                      className="product-name-on-card"
                                    >
                                      {subCategories.sub_cat_name}
                                    </Link>
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
                        <span className="material-symbols-outlined search-btn">
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

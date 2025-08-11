import gsap from "gsap";
import { useEffect } from "react";
import { useLocation, Link, Links } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "/logo.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../../css/HeaderDesktop.css";

export default function HeaderDesktop() {
  let location = useLocation();

  useEffect(() => {
    gsap.fromTo(".content", { opacity: 0, x: 300 }, { opacity: 1, x: 0 });
  }, [location]);

  return (
    <div>
      <Navbar className="bg-body-tertiary py-3 navbar" fixed={"top"}>
        <Container fluid={true}>
          <Row className="flex w-100 justify-between">
            <Col xl={4} md={4} sm={6} className="text-left">
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

            <Col xl={4} md={4} sm={6}>
              <div className="d-flex searchContainer gap-3">
                <input type="text" className="form-control" placeholder="Search for a product"/>
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

            <Col xl={4} md={4} sm={6} className="text-right">
              <Link to="" className="btn">
                <span class="material-symbols-outlined">notifications</span>
                <span className="badge text-white bg-danger">2</span>
              </Link>

              <Link to="" className="btn">
                <span class="material-symbols-outlined">settings_phone</span>
              </Link>

              <Link to="/login" className="btn">
                Login
              </Link>

              <button className="btn cart btn">
                <span class="material-symbols-outlined">shopping_cart</span>
                <span className="badge text-white bg-danger">2</span>
              </button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

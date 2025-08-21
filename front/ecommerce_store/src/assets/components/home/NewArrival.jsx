import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ProductIsLoading from "../Placeholder/ProductIsLoading";

export default function NewArrival() {
  const [productByRemarks, setproductByRemarks] = useState([]);
  const getProductsByRemaks = () => {
    try {
      axios
        .get("products/new")
        .then(function (response) {
          // console.log(response);
          setTimeout(() => {
            setproductByRemarks(response.data);
          }, 4000);

          setTimeout(() => {
            setIsLoading("d-none");
            setMainComponent("");
          }, 4000);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  const [mainComponent, setMainComponent] = useState("d-none");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => getProductsByRemaks(), []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          autoplaySpeed: 500,
        },
      },
    ],
  };

  return (
    <div>
      <Container>
        <div className="section-title">
          <h2>New Arrival</h2>
          <p>Some of our New Arrival you may also like</p>
          <a
            className="site-btn bg-primary text-white pt-2 pointer m-1"
            onClick={previous}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </a>

          <a
            className="site-btn bg-primary text-white pt-2 pointer m-1"
            onClick={next}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </a>
        </div>
        <Row className={`p-1 ${isLoading}`}>
          <Col xl={3} lg={3} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={3} lg={3} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={3} lg={3} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={3} lg={3} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
        </Row>
        <Row className={mainComponent}>
          <Col xl={12}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {productByRemarks.map((productByRemark, index) => (
                <Col
                  key={index}
                  className="p-1"
                  xl={3}
                  lg={3}
                  sm={4}
                  xs={6}
                  md={3}
                >
                  <Link
                    to={`/product/${productByRemark.id}`}
                    className="product-name-on-card"
                  >
                    <Card className="card h-100">
                      <div className="image-box">
                        <img
                          src={productByRemark.image}
                          alt={productByRemark.title}
                        />
                      </div>
                      <Card.Body>
                        <div className="product-name-on-card">
                          <Link
                            to={`product/${productByRemark.id}`}
                            className="product-name-on-card"
                          >
                            {productByRemark.title}
                          </Link>
                        </div>
                        <div className="product-price-on-card">
                          <h3>
                            <Badge bg="danger">
                              {productByRemark.special_price} Fcfa {" "}
                            </Badge>
                          </h3>
                          {productByRemark.price ? (
                            <Badge bg="secondary">
                              <span style={{ textDecoration: "line-through" }}>
                                {productByRemark.price} Fcfa
                              </span>
                            </Badge>
                          ) : (
                            ""
                          )}
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

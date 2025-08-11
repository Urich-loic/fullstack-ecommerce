import React, { useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import Slider from "react-slick";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";

export default function NewArrival() {
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
        <Row>
          <Col xl={12}>
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag13.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag12.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag10.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag11.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag10.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="card">
                  <div className="image-box">
                    <img src="/src/assets/images/imag12.webp" alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Ai+ Pulse (Purple, 64 GB)
                    </p>
                    <p className="product-price-on-card">$ 300</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

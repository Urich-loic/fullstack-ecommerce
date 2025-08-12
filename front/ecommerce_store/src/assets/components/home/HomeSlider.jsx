import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Slider from "react-slick";
import "../../css/HomeSlider.css";

export default function HomeSliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Container className="">
        <Row>
          <Col lg={12}>
            <div className="slider-container">
              <Slider {...settings}>
               
                <div className="slider-img overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/slider3.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="slider-img overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/slider2.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                 <div className="slider-img overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/slider1.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>

                 <div className="slider-img overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/slider4.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>

                <div className="slider-img overflow-hidden rounded-xl">
                  <img
                    src="/src/assets/images/slider1.png"
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

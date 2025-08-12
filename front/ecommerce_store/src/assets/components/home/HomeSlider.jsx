import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Slider from "react-slick";
import axios from "axios";
import "../../css/HomeSlider.css";

export default function HomeSliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [slideImages, setSlideImages] = useState([]);
  const getSlideImages = () => {
    try {
      axios
        .get("get-slider")
        .then(function (response) {
          // console.log(response);
          setSlideImages(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => getSlideImages(), []);

  return (
    <div>
      <Container className="">
        <Row>
          <Col lg={12}>
            <div className="slider-container">
              <Slider {...settings}>
                {slideImages.map((slideImage) => (
                  <div className="slider-img overflow-hidden rounded-xl">
                    <img
                      src={slideImage.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                ))}

                {/* <div className="slider-img overflow-hidden rounded-xl">
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
                </div> */}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

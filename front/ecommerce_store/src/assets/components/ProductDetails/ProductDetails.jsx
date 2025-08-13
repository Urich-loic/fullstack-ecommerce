import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product1 from "../../images/product/product1.png";
import Product2 from "../../images/product/product2.png";
import Product3 from "../../images/product/product3.png";
import Product4 from "../../images/product/product4.png";
import ProductIsLoading from "../Placeholder/ProductIsLoading.jsx";
import ReactDOM from "react-dom";
import { div, h3 } from "framer-motion/client";
import { Badge } from "react-bootstrap";

export default function ProductDetails({
  productDetail,
  isLoading,
  mainComponent,
}) {
  console.log(productDetail);

  const [imgItem, setImgItem] = useState(productDetail[0].image);

  const handlImgClick = (e) => {
    const img = e.target.getAttribute("src");
    console.log(img);
    setImgItem(img);
  };

  return (
    <div>
      <Container className="BetweenTwoSection">
        <Row className={`h-100 ${isLoading}`}>
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

        <Col
          className={`shadow-sm bg-white pb-3 mt-4 ${mainComponent}`}
          md={12}
          lg={12}
          sm={12}
          xs={12}
        >
          <Row>
            <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
              <div className="mainImage">
                <img id="previewImg" className="w-100" src={imgItem} />
              </div>
              <Container className="my-3">
                <Row className="thumbnail_images">
                  <Col className="p-0 m-0 img" md={3} lg={3} sm={3} xs={3}>
                    <img
                      className="w-100"
                      onClick={(e) => handlImgClick(e)}
                      src={productDetail[1].image_one}
                    />
                  </Col>
                  <Col className="p-0 m-0 img" md={3} lg={3} sm={3} xs={3}>
                    <img
                      className="w-100"
                      onClick={(e) => handlImgClick(e)}
                      src={productDetail[1].image_two}
                    />
                  </Col>
                  <Col className="p-0 m-0 img" md={3} lg={3} sm={3} xs={3}>
                    <img
                      className="w-100"
                      onClick={(e) => handlImgClick(e)}
                      src={productDetail[1].image_three}
                    />
                  </Col>
                  <Col className="p-0 m-0 img" md={3} lg={3} sm={3} xs={3}>
                    <img
                      className="w-100"
                      onClick={(e) => handlImgClick(e)}
                      src={productDetail[1].image_four}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
              <h5 className="Product-Name text-left">
                {productDetail[0].title}
              </h5>
              <h6 className="section-sub-title text-left">
                {productDetail[1].short_description}
              </h6>
              <h4 className="section-sub-title text-left">
                {productDetail[1].short_description}
              </h4>

              <p className="section-sub-title bold list text-left m-0">
                <strong>Category</strong> : {productDetail[0].category}
              </p>
              <p className="section-sub-title text-left m-0">
                <strong>Sub Category</strong> : {productDetail[0].sub_cat}
              </p>
              <p className="section-sub-title text-left m-0">
                <strong>Product code</strong> : {productDetail[0].product_code}
              </p>
              <p className="section-sub-title text-left m-0">
                <strong>Brand</strong> : {productDetail[0].brand}
              </p>

              <div className="d-flex gap-3">
                {productDetail[0].special_price && (
                  <p className="product-price-on-card">
                    <h3>
                      <Badge bg="danger">{productDetail[0].price} Fcfa</Badge>
                    </h3>
                  </p>
                )}

                {productDetail[0].special_price && (
                  <h3>
                     <Badge bg="secondary">
                    <span style={{ textDecoration: "line-through" }}>
                      {productDetail[0].special_price} Fcfa
                    </span>
                  </Badge>
                  </h3>
                 
                )}
              </div>

              {productDetail[1].color && (
                <div>
                  <h6 className="mt-2 text-left">Choose Color</h6>
                  <div className="input-group">
                    <select name="" id="" className="p-2">
                      <option value="">Choose color</option>
                      {productDetail[1].color.split(",").map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {productDetail[1].size && (
                <div>
                  <h6 className="mt-2 text-left">Choose Size</h6>
                  <div className="input-group">
                    <select name="" id="" className="p-2">
                      <option value={""}>Choose Size</option>
                      {productDetail[1].size.split(",").map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <h6 className="mt-2 text-left">Quantity</h6>
              <input className="form-control text-center w-50" type="number" />

              <div className="input-group mt-3">
                <button className="btn site-btn m-1 ">
                  {" "}
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                  Add To Cart
                </button>
                <button className="btn btn-primary m-1">
                  {" "}
                  <span className="material-symbols-outlined">
                    delivery_truck_speed
                  </span>{" "}
                  Order Now
                </button>
                <button className="btn btn-primary m-1">
                  {" "}
                  <span className="material-symbols-outlined">favorite</span>
                  Favourite
                </button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="text-left" md={6} lg={6} sm={12} xs={12}>
              <h6 className="mt-2 text-left">DETAILS</h6>
              {productDetail[1].long_description}
            </Col>

            <Col className="" md={6} lg={6} sm={12} xs={12}>
              <h6 className="mt-2 text-left">REVIEWS</h6>
              <p className=" p-0 m-0 text-left">
                <span className="Review-Title">Kazi Ariyan</span>{" "}
                <span className="text-success">
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                </span>{" "}
              </p>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>

              <p className=" p-0 m-0 text-left">
                <span className="Review-Title">Kazi Ariyan</span>{" "}
                <span className="text-success">
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                </span>{" "}
              </p>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>

              <p className=" p-0 m-0 text-left">
                <span className="Review-Title">Kazi Ariyan</span>{" "}
                <span className="text-success">
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                  <span className="material-symbols-outlined">star</span>{" "}
                </span>{" "}
              </p>
              <p className="text-left">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductIsLoading from "../Placeholder/ProductIsLoading";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const getCategories = () => {
    try {
      axios
        .get("/products/collection")
        .then(function (response) {
          // console.log(response);

          setTimeout(() => {
            setProducts(response.data);
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

  useEffect(() => getCategories(), []);

  return (
    <div>
      <Container>
        <div className="section-title">
          <h2>Products Collection</h2>
          <p>Some of our products collection you may also like</p>
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
        <Row className={`p-1 ${mainComponent}`}>
          {products.map((product, index) => (
            <Col
              key={index}
              className={`p-1`}
              xl={3}
              lg={3}
              sm={4}
              xs={6}
              md={3}
            >
              <Link
                to={`/product/${product.id}`}
                className="product-name-on-card"
              >
                <Card className="card h-100">
                  <div className="image-box">
                    <img src={product.image} alt="" />
                  </div>
                  <Card.Body>
                    <p className="product-name-on-card">{product.title}</p>
                    <p className="product-price-on-card">
                      {product.price} Fcfa
                    </p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

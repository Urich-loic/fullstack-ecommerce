import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import ProductIsLoading from "../Placeholder/ProductIsLoading";

export default function ProductByCategory({ products, isLoading, mainComponent }) {
  const { category } = useParams();


  return (
    <div className="content">
      <Container>
        <div className="section-title">
          <h2 style={{ textTransform: "capitalize" }}>{category} Collection</h2>
          <p>Some of our products collection you may also like</p>
        </div>

        <Row className={mainComponent}>
          {products.map((product, index) => (
            <Col key={index} className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
              <Card className="card h-100">
                <div className="image-box">
                  <img src={product.image} alt="" />
                </div>
                <Card.Body>
                  <p className="product-name-on-card">
                    <Link
                      to={`/product/${product.id}`}
                      className="product-name-on-card"
                    >
                      {product.title}
                    </Link>
                  </p>
                  <p className="product-price-on-card">{product.price} Fcfa</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

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
      </Container>
    </div>
  );
}

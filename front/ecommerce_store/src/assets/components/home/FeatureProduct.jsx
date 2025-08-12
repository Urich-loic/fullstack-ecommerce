import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

export default function FeatureProduct() {
  const [productByRemarks, setproductByRemarks] = useState([]);
  const getProductsByRemaks = () => {
    try {
      axios
        .get("products/featured")
        .then(function (response) {
          // console.log(response);
          setproductByRemarks(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => getProductsByRemaks(), []);

  return (
    <Container className="text-center" fluid={false}>
      <div className="section-title">
        <h2>Featured Product</h2>
        <p>Some of our feature products you may also like</p>
      </div>
      <Row className="">
        {productByRemarks.map((productByRemark, index) => (
          <Col key={index} className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
            <Card className="card h-100">
              <div className="image-box">
                <img src={productByRemark.image} alt={productByRemark.title} />
              </div>
              <Card.Body>
                <p className="product-name-on-card">
                  <Link to={`product/${productByRemark.id}`} className="product-name-on-card">{productByRemark.title}</Link>
                </p>
                <p className="product-price-on-card">
                  <h3>
                    <Badge bg="danger">
                      {productByRemark.special_price} Fcfa /{" "}
                    </Badge>
                  </h3>
                  <Badge bg="secondary">
                    <span style={{ textDecoration: "line-through" }}>
                      {productByRemark.price} Fcfa
                    </span>
                  </Badge>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

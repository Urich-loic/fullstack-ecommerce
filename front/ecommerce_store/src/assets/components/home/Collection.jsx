import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const getCategories = () => {
    try {
      axios
        .get("/products/collection")
        .then(function (response) {
          // console.log(response);
          setProducts(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      throw Error(error);
    }
  };

  useEffect(() => getCategories(), []);

  return (
    <div>
      <Container>
        <div className="section-title">
          <h2>Products Collection</h2>
          <p>Some of our products collection you may also like</p>
        </div>
        <Row>
          {products.map((product) => (
            <Col className="p-1" xl={3} lg={3} sm={4} xs={6} md={3}>
              <Card className="card h-100">
                <div className="image-box">
                  <img src={product.image} alt="" />
                </div>
                <Card.Body>
                  <p className="product-name-on-card">
                   <Link to={`product/${product.id}`} className="product-name-on-card">{product.title}</Link>
                  </p>
                  <p className="product-price-on-card">{product.price} Fcfa</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

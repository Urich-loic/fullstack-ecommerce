import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductIsLoading from "../Placeholder/ProductIsLoading";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    try {
      axios
        .get("categories")
        .then(function (response) {
          // console.log(response);
            setTimeout(() => {
            setCategories(response.data);
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

  const convertToString = (catName)=>{
    const newCatName = catName.split(" ").join("-");
    return newCatName.toLowerCase();
  }

  const [mainComponent, setMainComponent] = useState("d-none");
      const [isLoading, setIsLoading] = useState("");

  useEffect(() => getCategories(), []);

  return (
    <div>
      <Container className="text-center" fluid={true}>
        <div className="section-title">
          <h2>Categories</h2>
          <p>Some of our categories you may also like</p>
        </div>
        <Row className={`h-100 ${isLoading}`}>
          <Col xl={2} lg={3} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>
          <Col xl={2} lg={2} sm={4} xs={6} md={3}>
            <ProductIsLoading />
          </Col>

        </Row>
        <Row className={mainComponent}>
          <Col key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
            <Row className="p-0 gap-0">
              {categories.map((category) => (
               
                  <Col className="p-0" xl={2} lg={2} md={3} sm={4} xs={6}>
                     <Link to={`/${convertToString(category.cat_name)}`}>
                    <Card className="h-100 w-100 text-center">
                      <Card.Body className="">
                        <div className="image-box mb-2">
                          <img src={category.cat_image} alt="" />
                        </div>
                        <h3 className="category-name"> {category.cat_name}</h3>
                      </Card.Body>
                    </Card>
                     </Link>
                  </Col>
               
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

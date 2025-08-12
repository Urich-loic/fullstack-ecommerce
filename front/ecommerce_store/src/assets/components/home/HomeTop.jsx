import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import MegaMenu from "./MegaMenu";
import HomeSliders from "./HomeSlider";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import SliderLoading from "../Placeholder/SliderLoading";

export default function HomeTop() {
  const [mainComponent, setMainComponent] = useState("d-none");
  const [isLoading, setIsLoading] = useState("");

  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    try {
      axios
        .get("categories")
        .then(function (response) {
          // console.log(response);
          setCategories(response.data);
          setIsLoading('d-none');
          setMainComponent('');
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
    <div className="mt-5">
      <Container fluid={true}>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <MegaMenu categories={categories} />
          </Col>
          <Col lg={9} md={12} sm={12}>
            <SliderLoading isLoading={isLoading} />
            <div className={mainComponent}>
              <HomeSliders />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

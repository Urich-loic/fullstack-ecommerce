import React, { useEffect, useState } from "react";
import ProductByCategory from "../components/ProductByCategory/ProductByCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductIsLoading from "../components/Placeholder/ProductIsLoading";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export default function ProductByCategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const getCategories = () => {
    try {
      axios
        .get(`/products-by-categories/${category}`)
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
     
        <ProductByCategory products={products}mainComponent={mainComponent} isLoading={isLoading}/>


    </div>
  );
}

import React, { useEffect, useState } from "react";
import ProductByCategory from "../components/ProductByCategory/ProductByCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ProductByCategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const getCategories = () => {
    try {
      axios
        .get(`/products-by-categories/${category}`)
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
      <ProductByCategory products={products} />
    </div>
  );
}

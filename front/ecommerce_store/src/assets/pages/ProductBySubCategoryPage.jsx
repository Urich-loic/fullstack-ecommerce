import React, { useEffect, useState } from "react";
import ProductBySubCategory from "../components/ProductBySubCategory/ProductBySubCategory";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ProductBySubCategoryPage() {
  const { category, sub_cat } = useParams();

  const [products, setProducts] = useState([]);

  const getCategories = () => {
    try {
      axios
        .get(`/products-by-sub-cat/${category}/${sub_cat}`)
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
      <ProductBySubCategory products={products} />
    </div>
  );
}

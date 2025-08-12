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
      <ProductBySubCategory products={products}mainComponent={mainComponent} isLoading={isLoading} />
    </div>
  );
}

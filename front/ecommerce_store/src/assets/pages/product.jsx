import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProducts from "../components/ProductDetails/SuggestedProducts";
import axios from "axios";
import AppUrl from "../../api/AppUrl";

export default function Product() {
  const { id } = useParams();
  // console.log(id);

  const [productDetail, setProductDetail] = useState(null);
  const [mainComponent, setMainComponent] = useState("d-none");
  const [isLoading, setIsLoading] = useState("");

  const getProductDetails = () => {
    axios
      .get(`product/${id}`)
      .then(function (response) {
        console.log(response);

        setProductDetail(response.data);

        setTimeout(() => {
          setMainComponent("");
          setIsLoading("d-none");
        }, 5000);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  console.log(productDetail);

  return (
    <div className="content">
      {productDetail ? (
        <ProductDetails
          productDetail={productDetail}
          mainComponent={mainComponent}
          isLoading={isLoading}
        />
      ) : (
        "No component found"
      )}

      <SuggestedProducts isLoading={isLoading} mainComponent={mainComponent} />
    </div>
  );
}

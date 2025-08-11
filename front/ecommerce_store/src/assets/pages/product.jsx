import React from "react";
import { useParams } from "react-router-dom";
import "../css/ProductDetails.css";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import SuggestedProducts from "../components/ProductDetails/SuggestedProducts";

export default function Product() {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="content">
      <ProductDetails />
      <SuggestedProducts />
    </div>
  );
}

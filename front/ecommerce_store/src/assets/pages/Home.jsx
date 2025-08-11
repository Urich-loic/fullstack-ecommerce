import React from "react";
import FeatureProduct from "../components/home/FeatureProduct";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";

export default function Home() {
  return (
    <div className="Home animate__zoomIn">
      <div className="content mt-5 pt-2">
        <HomeTop/>
        <FeatureProduct />
        <NewArrival />
        <Categories />
        <Collection />
      </div>
    </div>
  );
}

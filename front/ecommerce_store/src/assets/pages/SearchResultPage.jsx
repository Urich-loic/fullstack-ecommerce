import React, { useState } from "react";
import SearchResult from "../components/Search/SearchResult";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SearchResultPage() {
  const { searchedItem } = useParams();

  const [isLoading, setIsLoading] = useState("");
  const [mainComponent, setMainComponent] = useState("d-none");

  const [productList, setProductList] = useState([]);

  try {
    axios
      .get(`/search/${searchedItem}`)
      .then(function (response) {
        setTimeout(() => {
          setProductList(response.data);
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

  //   useEffect(() => {
  //     SearchResult();
  //   }, []);

  console.log(mainComponent);

  return (
    <div className="content">
      <SearchResult
        mainComponent={mainComponent}
        isLoading={isLoading}
        productList={productList}
        searchedItem={searchedItem}
      />
    </div>
  );
}

import React from "react";
import SingleProduct from "./SingleProduct";
import "./Component.css";

const SearchResults = ({ state }) => {
  return (
    <div className="searchWindow">
      <div className="SearchContainer">
        <SingleProduct product={state} key={state.id} />
      </div>
    </div>
  );
};
export default SearchResults;

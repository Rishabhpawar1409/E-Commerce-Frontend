import React from "react";
import SingleProduct from "./SingleProduct";

const SearchResults = ({ state }) => {
  return (
    <div className="Container">
      return <SingleProduct product={state} key={state.id} />;
    </div>
  );
};
export default SearchResults;

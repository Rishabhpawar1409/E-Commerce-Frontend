import React from "react";
import { CartState } from "../context/Context";
import "./Component.css";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

function SingleProduct({ product }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="product_container">
      <div className="image-box">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product_description">
        <p>{product.title}</p>
      </div>
      <div className="rating">
        <BsFillStarFill color="gold" />
        <BsFillStarFill color="gold" />
        <BsFillStarFill color="gold" />
        <BsFillStarFill color="gold" />
        <BsStarHalf color="gold" />
      </div>

      <div className="product_price">
        <p>
          &#8377; <span> {product.price}</span>
        </p>
      </div>
      <div className="button-cart">
        {cart.some((p) => p.id === product.id) ? (
          <button
            onClick={() => {
              dispatch({ type: "REMOVE_FROM_CART", payload: product });
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: product });
            }}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
export default SingleProduct;

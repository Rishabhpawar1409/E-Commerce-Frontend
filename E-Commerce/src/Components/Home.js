import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "./Component.css";

const Home = () => {
  // Destructuring my products state from reducer(CartState).
  const {
    state: { products }
  } = CartState();
  //
  return (
    <>
      <div className="banner">
        <img className="banner_img" src="Assets/banner.jpg" alt="" />
      </div>

      <div className="Container">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>

      {/* Footer */}

      <div className="footer">
        <div className="footer_row d-flex">
          <div className="logo">
            <img src="Assets/logo.png" alt="" />
          </div>
          <div className="contact">
            <ul>
              <li>
                <p>
                  <i className="fas fa-map-marker-alt"></i>

                  <span>Delhi, India</span>
                </p>
              </li>
              <li>
                <p>
                  <i className="fas fa-envelope-open-text"></i>

                  <span>rishabhpawar1409@gmail.com</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="developer">
          <p>
            Desinged By ~ <span>Rishabh Pawar</span>
          </p>
        </div>
      </div>
      {/*  */}
    </>
  );
};
export default Home;

import React from "react";
import { CartState } from "../context/Context";
import "./Component.css";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useState, useEffect } from "react";

function Cart() {
  // Destructuring my cart state & dispatch method from reducer(CartState).
  const {
    state: { cart },
    dispatch
  } = CartState();
  //
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
  }, [cart]);

  const ClickMe = () => {
    alert(`pay ${total}`);
  };

  return (
    <div>
      {cart.length ? (
        <div>
          <h3>Shopping Cart</h3>
          <div className="table-details">
            <table>
              <tr>
                <td>
                  <p> TOTAL ITEMS : {cart.length} </p>
                </td>
              </tr>
              <tr>
                <td>
                  <p> TOTAL PRICE : ₹ {total}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={ClickMe}>CHECKOUT</button>
                </td>
              </tr>
            </table>
          </div>

          {/* rendering products in cart*/}
          <div className="Container">
            {cart.map((prod) => {
              return (
                <div key={prod.id} className="product_container">
                  <div className="image-box">
                    <img src={prod.image} alt={prod.title} />
                  </div>
                  <div className="product_description">
                    <p>{prod.title}</p>
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
                      &#8377; <span> {prod.price * prod.quantity}</span>
                    </p>
                  </div>
                  <div className="quantity">
                    <p>Quantity:</p>
                    <select
                      id="qty"
                      name="qty"
                      value={prod.quantity}
                      onChange={(e) => {
                        dispatch({
                          type: "CHANGE_QTY",
                          payload: { id: prod.id, quantity: e.target.value }
                        });
                      }}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>

                  <div className="button-cart">
                    <ImBin
                      className="bin"
                      color="A64B2A"
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: prod });
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="EmptyContainer">
          <div className="Empty">
            <p>Your cart is empty!</p>
            <div className="emptyImg">
              <img src="Assets/cart.gif" alt="Empty Cart!" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;

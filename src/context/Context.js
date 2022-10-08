import React, { createContext, useContext, useState, useReducer } from "react";
import data from "./data";
import CartReducer from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const [products] = useState(data);
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: []
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};
export default Context;

export const CartState = () => {
  return useContext(Cart);
};

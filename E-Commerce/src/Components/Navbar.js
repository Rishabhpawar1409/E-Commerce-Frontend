import React from "react";
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import "../../public/styles.css";
import "./Component.css";
import { Link } from "react-router-dom";

function Navbar() {
  const {
    state: { cart }
  } = CartState();
  return (
    <nav className="d-flex none">
      <Link to="/">
        <div className="logo">
          <img src="Assets/logo.png" alt="Amazon" />
        </div>
      </Link>

      <div className="search d-flex">
        <input type="text" />
        <i className="fas fa-search"></i>
      </div>
      <ul className="nav_menu d-flex">
        <li>
          <p>
            Hello Guest <br />
            <span>Sign In</span>
          </p>
        </li>
        <li>
          <p>
            Return <br />
            <span>Orders</span>
          </p>
        </li>
        <li>
          <p>
            Your <br />
            <span>Prime</span>
          </p>
        </li>
        <li>
          <Link to="/cart">
            <Badge badgeContent={cart.length} color="primary">
              <FaShoppingCart className="cart-icon" color="white" />
            </Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

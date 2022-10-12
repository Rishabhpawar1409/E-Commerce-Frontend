import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import "../../public/styles.css";
import "./Component.css";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

function Navbar({ handleInput, emptyState }) {
  const [input, setInput] = useState("");
  const [isUser, setIsUser] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const { user, logout } = useUserAuth();

  useEffect(() => {
    if (user) {
      setIsUser(true);
    }
  }, [user]);
  const {
    state: { cart, products }
  } = CartState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setInput("");
    products.map((product) => {
      return product.title.includes(input) ? handleInput(product) : "";
    });
  };

  const handleState = () => {
    emptyState();
  };

  const handleLogOut = async () => {
    setIsUser(false);
    try {
      await logout();
    } catch (err) {
      setMessage({ error: true, msg: err.message });
      console.log(message);
    }
  };
  return (
    <nav className="d-flex none">
      <Link to="/">
        <div
          className="logo"
          onClick={() => {
            handleState();
          }}
        >
          <img src="Assets/logo.png" alt="Amazon" />
        </div>
      </Link>

      <div className="search d-flex">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {input.length ? (
          <i
            className="fas fa-search"
            onClick={() => {
              handleSubmit();
            }}
          ></i>
        ) : (
          ""
        )}
      </div>
      <ul className="nav_menu d-flex">
        <li>
          <p>
            Hello Guest <br />
            <Link to="/signUp" className="login/signup-text">
              <span
                onClick={() => {
                  handleState();
                }}
              >
                Sign Up
              </span>
            </Link>
          </p>
        </li>
        {isUser === false ? (
          <li>
            <p>
              Hello Guest <br />
              <Link to="/login" className="login/signup-text">
                <span
                  onClick={() => {
                    handleState();
                  }}
                >
                  Sign In
                </span>
              </Link>
            </p>
          </li>
        ) : (
          <li>
            <p>
              <span
                onClick={() => {
                  handleLogOut();
                  handleState();
                }}
              >
                Log Out
              </span>
            </p>
          </li>
        )}

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

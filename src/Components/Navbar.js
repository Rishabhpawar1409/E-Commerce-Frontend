import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import "../styles.css";
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
    state: { cart, products },
  } = CartState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

      <form
        className="search d-flex"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          style={{ borderRadius: "5px" }}
          type="text"
          value={input}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {input.length ? (
          <i
            className="fas fa-search"
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              marginLeft: "0.35rem",
            }}
            onClick={(e) => {
              handleSubmit(e);
            }}
          ></i>
        ) : (
          ""
        )}
      </form>

      <ul className="nav_menu d-flex">
        <li>
          <p>
            Hello Guest <br />
            <Link to="/signUp" className="loginSignUpLink">
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
            <Link
              to="/login"
              className="loginSignUpLink"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "12px",
              }}
            >
              <BiLogIn style={{ fontSize: "18px" }} />
              <span
                onClick={() => {
                  handleState();
                }}
              >
                log in
              </span>
            </Link>
          </li>
        ) : (
          <li
            onClick={() => {
              handleLogOut();
              handleState();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "12px",
            }}
          >
            <BiLogOut
              className="loginSignUpLink"
              style={{ fontSize: "18px" }}
            />
            <span style={{ cursor: "pointer" }}>log out</span>
          </li>
        )}

        <li>
          <Link to="/cart">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaShoppingCart
                className="cart-icon"
                color="white"
                style={{ position: "relative" }}
              />
              {cart.length > 0 && (
                <div
                  style={{
                    height: "19px",
                    width: "19px",
                    backgroundColor: "cyan",
                    borderRadius: "50%",
                    marginBottom: "1rem",
                    marginLeft: "1.25rem",
                    position: "absolute",
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

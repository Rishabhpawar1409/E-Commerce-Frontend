import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../todoFirebase";

function Login() {
  const { user } = useUserAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(false);
  const [error, setError] = useState("");
  const { login, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      await login(email, password);
      setUserLogin(true);
      localStorage.setItem("user", JSON.stringify(userLogin));
      await addDoc(collection(db, "users"), {
        email
      });

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleLogIn = async () => {
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="login-container">
      <h2>Firebase Auth Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
      <p>
        Sign In with{" "}
        <button
          onClick={() => {
            handleGoogleLogIn();
          }}
        >
          Google
        </button>
      </p>
      <p>
        Don't have an account? <Link to="/signUp">Sign Up</Link>
      </p>
    </div>
  );
}
export default Login;

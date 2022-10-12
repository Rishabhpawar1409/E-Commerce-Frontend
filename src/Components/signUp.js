import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login-container">
      <h2>Firebase Auth Sign Up</h2>
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
          handleSignUp();
        }}
      >
        Sign Up
      </button>
      <p>
        Already have an account? <Link to="/">Log In</Link>
      </p>
    </div>
  );
}
export default SignUp;

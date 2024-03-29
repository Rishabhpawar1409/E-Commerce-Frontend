import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./login";
import SignUp from "./signUp";
import SearchResults from "./searchResults";
import { UserAuthContextProvider } from "../context/userAuthContext";
import ProtectedRoute from "./protectedRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState("");

  const handleInput = (product) => {
    setState(product);
  };

  const emptyState = () => {
    setState("");
  };
  return (
    <UserAuthContextProvider>
      <Router>
        <div className="App">
          <Navbar handleInput={handleInput} emptyState={emptyState} />

          {state ? <SearchResults state={state} /> : ""}
          <Routes>
            {state ? (
              ""
            ) : (
              <>
                <Route
                  exact
                  path="/signUp"
                  element={<SignUp />}
                  emptyState={emptyState}
                />
                <Route
                  exact
                  path="/login"
                  element={<Login />}
                  emptyState={emptyState}
                />
                <Route
                  exact
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/cart"
                  element={<Cart />}
                  emptyState={emptyState}
                />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </UserAuthContextProvider>
  );
}
export default App;

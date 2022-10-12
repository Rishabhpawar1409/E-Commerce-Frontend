import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./login";
import SearchResults from "./searchResults";
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
    <Router>
      <div className="App">
        <Navbar handleInput={handleInput} emptyState={emptyState} />
        {state ? <SearchResults state={state} /> : ""}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          {state ? "" : <Route exact path="/" element={<Home />} />}
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

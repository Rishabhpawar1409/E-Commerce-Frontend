import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [state, setState] = useState("");

  const handleInput = (input) => {
    console.log(input);
  };
  return (
    <Router>
      <div className="App">
        <Navbar handleInput={handleInput} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;

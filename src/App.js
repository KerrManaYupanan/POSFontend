import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Z_Product";
import AddProduct from "./Z_AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

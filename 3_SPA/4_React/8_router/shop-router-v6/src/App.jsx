import { useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

// pages
import { Home, About, Products, ProductDetails } from "./pages/index";

function App() {
  const [cartIsEmpty] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Shirtz.Cool</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />

          <Route
            path="/checkout"
            element={
              cartIsEmpty ? <Navigate to="/products" /> : <p>Checkout</p>
            }
          />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

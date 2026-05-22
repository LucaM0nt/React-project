import { useState } from "react";
import "./App.css";
import dummyProducts from "./data/dummyData";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;

  return (
    <>
      <Header cartCount={cartCount} />
      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import dummyProducts from "./data/dummyData";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <Header />
      {dummyProducts.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          category={product.category}
          image={product.image}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;

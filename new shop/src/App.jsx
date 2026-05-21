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
      <div className="hero container section">
        <h1 className="h1">Welcome to our shop!</h1>
        <div className="description">
          <p>
            Explore our wide range of products, from trendy clothing to stylish
            accessories. Find the perfect items to express your unique style and
            elevate your wardrobe. Shop now and discover the latest fashion
            trends at unbeatable prices!
          </p>
        </div>
      </div>
      <main className="container section">
        <div className="grid-products">
          {dummyProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

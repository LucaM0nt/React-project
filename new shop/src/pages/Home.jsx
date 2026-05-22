import { useState } from "react";
import SearchBar from "../components/Searchbar";
import CategoriesFilters from "../components/CategoriesFilters";
import ProductCard from "../components/ProductCard";
import dummyProducts from "../data/dummyData";

export default function Home({ cartItems, setCartItems }) {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts);

  const [categories, setCategories] = useState([
    "All",
    ...new Set(dummyProducts.map((product) => product.category)),
  ]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onAddToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function onSearchChange(e) {
    setQuery(e.target.value);
    setFilteredProducts(
      dummyProducts.filter((product) =>
        product.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  }

  function onCategorySelect(category) {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(dummyProducts);
      return;
    }
    setFilteredProducts(
      dummyProducts.filter((product) => product.category === category),
    );
  }

  return (
    <>
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
        <SearchBar value={query} onChange={onSearchChange} />
        <CategoriesFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onCategorySelect}
        />
      </div>

      <main className="container section">
        <div className="grid-products">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
              onAddToCart={() => onAddToCart(product)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

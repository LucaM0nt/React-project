import SearchBar from "../components/Searchbar";
import CategoriesFilters from "../components/CategoriesFilters";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductsContext";

export default function Home() {
  const {
    query,
    setQuery,
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useProducts();

  function onSearchChange(e) {
    setQuery(e.target.value);
  }

  function onCategorySelect(category) {
    setSelectedCategory(category);
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
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      </main>
    </>
  );
}

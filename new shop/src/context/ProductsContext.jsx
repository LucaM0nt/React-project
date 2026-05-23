import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch("https://fakestoreapi.com/products")
      .then((response) =>
        response.ok
          ? response.json()
          : Promise.reject("Failed to fetch products"),
      )
      .then((data) => setProducts(data))
      .catch((err) =>
        setError(err instanceof Error ? err.message : String(err)),
      )
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesQuery = product.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        loading,
        error,
        query,
        setQuery,
        filteredProducts,
        categories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

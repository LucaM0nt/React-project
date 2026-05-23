import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container section">
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid-products">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

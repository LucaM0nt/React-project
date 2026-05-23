import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function isFavorite(productId) {
    return favorites.some((item) => item.id === productId);
  }

  function toggleFavorite(product) {
    isFavorite(product.id)
      ? setFavorites(favorites.filter((item) => item.id !== product.id))
      : setFavorites([...favorites, product]);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

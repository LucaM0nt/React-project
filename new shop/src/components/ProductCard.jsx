import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

import Button from "./Button";
import styles from "./ProductCard.module.css";

export default function ProductCard({ id, name, price, category, image }) {
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className={`${styles.card} column`}>
      <div className={styles.cardTop}>
        <Link to={`/products/${id}`}>
          <img className={styles.image} src={image} alt={name} />
        </Link>
        <p className={styles.category}>{category}</p>
        <Link to={`/products/${id}`}>
          <h3 className={styles.name}>{name}</h3>
        </Link>
      </div>
      <div className={styles.cardBottom}>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <div className={`${styles.cardActions} row`}>
          {/* <button
            className={`${styles.cartBtn} btn btn-accent`}
            onClick={onAddToCart}
          >
            🛒 Add to Cart
          </button> */}
          <Button
            onClick={() => addToCart({ id, name, price, category, image })}
            className={styles.cartBtn}
            variant="accent"
          >
            🛒 Add to Cart
          </Button>

          <Button
            className={styles.favoriteBtn}
            onClick={() => toggleFavorite({ id, name, price, category, image })}
            variant={isFavorite(id) ? "accent" : "outline"}
          >
            {isFavorite(id) ? "❤️" : "🤍"}
          </Button>
        </div>
      </div>
    </div>
  );
}

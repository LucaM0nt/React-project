import styles from "./ProductCard.module.css";
import { useState } from "react";

export default function ProductCard({
  name,
  price,
  category,
  image,
  onAddToCart,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={`${styles.card} column`}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <div className={`${styles.cardActions} row`}>
        <button
          className={`${styles.cartBtn} btn btn-accent`}
          onClick={onAddToCart}
        >
          🛒 Add to Cart
        </button>

        <button
          className={`btn ${styles.favoriteBtn} ${isFavorite ? "btn-accent" : "btn-outline"}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

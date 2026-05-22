import Button from "./Button";
import styles from "./ProductCard.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
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
      <Link to={`/products/${id}`}>
        <img className={styles.image} src={image} alt={name} />
      </Link>
      <p className={styles.category}>{category}</p>
      <Link to={`/products/${id}`}>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <p className={styles.price}>${price.toFixed(2)}</p>
      <div className={`${styles.cardActions} row`}>
        {/* <button
          className={`${styles.cartBtn} btn btn-accent`}
          onClick={onAddToCart}
        >
          🛒 Add to Cart
        </button> */}
        <Button
          onClick={onAddToCart}
          className={styles.cartBtn}
          variant="accent"
        >
          🛒 Add to Cart
        </Button>

        <Button
          className={styles.favoriteBtn}
          onClick={toggleFavorite}
          variant={isFavorite ? "accent" : "outline"}
        >
          {isFavorite ? "❤️" : "🤍"}
        </Button>
      </div>
    </div>
  );
}

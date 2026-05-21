import styles from "./ProductCard.module.css";

export default function ProductCard({ name, price, category, image }) {
  return (
    <div className={`${styles.card} column`}>
      <img className={styles.image} src={image} alt={name} />
      <p className={styles.category}>{category}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>${price.toFixed(2)}</p>
    </div>
  );
}

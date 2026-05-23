import { useCart } from "../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
  const { cartItems, addToCart, removeOneFromCart, cartTotal } = useCart();

  const items = cartItems.reduce((acc, item) => {
    const existing = acc.find((entry) => entry.id === item.id);

    if (existing) {
      existing.quantity += 1;
      return acc;
    }

    acc.push({ ...item, quantity: 1 });
    return acc;
  }, []);

  return (
    <div className="container section">
      <h1>Cart</h1>
      <ul className={styles.list}>
        {items.length === 0 ? (
          <li className={styles.empty}>Your cart is empty.</li>
        ) : (
          items.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.itemInfo}>
                <span className={styles.itemName}>{item.name}</span>
                <span className={styles.itemPrice}>
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <div className={styles.itemActions}>
                <button
                  className="btn btn-outline"
                  type="button"
                  onClick={() => removeOneFromCart(item.id)}
                >
                  -
                </button>
                <span className={styles.qty}>Qty: {item.quantity}</span>
                <button
                  className="btn btn-accent"
                  type="button"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      <p className={styles.total}>Total: ${cartTotal.toFixed(2)}</p>
    </div>
  );
}

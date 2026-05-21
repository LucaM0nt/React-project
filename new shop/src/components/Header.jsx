import Logo from "./Logo";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.navbar}`}>
      <div className={"container row"}>
        <Link className={styles.brand} to="/">
          <Logo />
        </Link>

        <nav aria-label="Main navigation">
          <ul className={`${styles.navLinks} row`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <Link to="/cart">🛒</Link>
        </div>
      </div>
    </header>
  );
}

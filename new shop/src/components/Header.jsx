import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header({ cartCount }) {
  return (
    <header className={`${styles.navbar}`}>
      <div className={"container row"}>
        <NavLink className={styles.brand} to="/">
          <Logo />
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className={`${styles.navLinks} row`}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.cartAndFav}>
          <NavLink to="/favorites">❤️</NavLink>
          <NavLink to="/cart">🛒 ({cartCount})</NavLink>
        </div>
      </div>
    </header>
  );
}

import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="navbar">
      <Link className="brand" to="/">
        <Logo />
      </Link>
      <nav aria-label="Main navigation">
        <ul>
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
      <div className="cart">
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  );
}

import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="nav-item container">
        <div className="logo">
          <NavLink to="/">
            <h2>Cocktail Bar</h2>
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
        {/* import in index.html <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    /> */}
        <div className="favorites-and-cart">
          <NavLink to="/favorites" className="icon-link" aria-label="Favorites">
            <i className="fa-regular fa-heart icon" aria-hidden="true" />
          </NavLink>
          <NavLink to="/cart" className="icon-link" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping icon" aria-hidden="true" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

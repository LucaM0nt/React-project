# New Shop - Project Documentation

Author: Luca Montanaro, student in the ITS Web Dev course.
Date: 25/05/2026

## 1. Project overview

New Shop is a small e-commerce demo built with React and Vite. It shows a product list, product detail pages, and basic cart and favorites features. Products are fetched from a public API and then filtered on the client.

## 2. Tech stack

- React + Vite
- React Router
- Context API (global state)
- CSS Modules for component styles
- Global CSS for layout and base styles

## 3. Folder structure (important parts)

```
src/
  App.jsx
  main.jsx
  components/
  context/
  data/
  pages/
```

- `App.jsx` defines the routes and shared layout (Header and Footer)
- `main.jsx` mounts the app and wraps it with providers
- `components/` contains reusable UI pieces (Header, ProductCard, SearchBar, etc.)
- `context/` contains global state (products, cart, favorites)
- `pages/` contains route-level pages (Home, ProductDetail, Cart, etc.)
- `data/` has optional dummy data for local testing

## 4. Architecture and data flow

At startup, `main.jsx` wraps the app with the router and context providers. Components can read and update global state through custom hooks.

```
  main --> Router[BrowserRouter]
  Router --> Cart[CartProvider] (context)
  Cart --> Fav[FavoritesProvider] (context)
  Fav --> Prod[ProductsProvider] (context)
  Prod --> App[App]
  App --> Header - Routes - Footer
```

```
  Routes --> Home
  Routes --> ProductDetail
  Routes --> Favorites
  Routes --> Cart
```

Basic flow on the Home page:

1. `ProductsContext` fetches products once when the app loads.
2. `Home` reads `filteredProducts`, `query`, and `selectedCategory` from context.
3. User search or category selection updates context state.
4. `ProductCard` renders the filtered list.

## 5. Context state management

### ProductsContext

- State: `products`, `loading`, `error`, `query`, `selectedCategory`
- Derived data: `categories`, `filteredProducts`
- API call: fetches from `https://fakestoreapi.com/products` on mount

### CartContext

- State: `cartItems`
- Actions: `addToCart`, `removeFromCart`, `removeOneFromCart`
- Derived data: `cartCount`, `cartTotal`

### FavoritesContext

- State: `favorites`
- Actions: `toggleFavorite`
- Helpers: `isFavorite`

Note: cart and favorites are in memory only (no persistence yet).

## 6. Routing

Routes are defined in `App.jsx`:

- `/` -> Home
- `/about` -> About
- `/products/:id` -> ProductDetail
- `/favorites` -> Favorites
- `/cart` -> Cart
- `*` -> ErrorPage

## 7. API call details

Location: `src/context/ProductsContext.jsx`

- Uses `fetch` in `useEffect` with an empty dependency array
- On success, stores the full product list in `products`
- On error, saves a readable error string
- Sets a `loading` flag while the request is in progress

## 8. Styling

- Global styles: `src/index.css` and `src/App.css` (last one not used)
- CSS Modules for page or component specific styles
  - Examples: `ProductDetail.module.css`, `Header.module.css`, `Footer.module.css`

## 9. How to run

```bash
npm install
npm run dev
```

Optional build and preview:

```bash
npm run build
npm run preview
```

## 10. Known limitations / next steps

- No local storage for cart or favorites (state resets on refresh)
- Product detail page does not show a loading state while products are fetching
- Dummy data exists in `src/data/dummyData.js` but is not used by default, it was used for testing reasons

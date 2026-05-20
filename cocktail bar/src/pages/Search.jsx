import { useEffect, useState } from "react";
import Drinks from "./Drinks";

const CATEGORIES_API_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
const SEARCH_API_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

export default function Search() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(CATEGORIES_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.drinks);
        console.log("Fetched categories:", data.drinks);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="container section">
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category.strCategory}
            className="filter-button"
            onClick={() => setCategory(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>

      <Drinks API_URL={category ? SEARCH_API_URL + category : null} />
    </section>
  );
}

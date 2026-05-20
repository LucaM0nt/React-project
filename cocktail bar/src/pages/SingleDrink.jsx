import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function SingleDrink() {
  const [drink, setDrink] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    fetch(API_URL + id)
      .then((response) => response.json())
      .then((data) => {
        setDrink(data.drinks[0]);
        console.log("Fetched drink:", data.drinks[0]);
      })
      .catch((error) => console.error("Error fetching drink:", error));
  }, []);

  return (
    <section className="container section">
      {!drink ? (
        <h1>Caricamento drink...</h1>
      ) : (
        <article className="card single-drink">
          <div className="single-drink-media">
            <img
              className="card-image"
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
            />
          </div>
          <div className="card-body">
            <h1 className="card-title">{drink.strDrink}</h1>
            <p className="text-muted">
              {drink.strAlcoholic} · {drink.strCategory}
            </p>
            {drink.strGlass ? (
              <p className="text-muted">{drink.strGlass}</p>
            ) : null}
            <div>
              <p className="text-muted">Ingredienti</p>
              <ul className="chip-list">
                {Object.keys(drink)
                  .filter(
                    (key) => key.startsWith("strIngredient") && drink[key],
                  )
                  .map((key) => (
                    <li key={key} className="chip">
                      {drink[key]}
                    </li>
                  ))}
              </ul>
            </div>
            <p className="text-muted">{drink.strInstructions}</p>
          </div>
        </article>
      )}
    </section>
  );
}

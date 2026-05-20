import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { Link } from "react-router-dom";

export default function Drinks({ API_URL }) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
        console.log("Fetched drinks:", data.drinks);
      })
      .catch((error) => console.error("Error fetching drinks:", error));
  }, [API_URL]);
  //   useEffect(() => {
  //   const load = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       const data = await response.json();
  //       setDrinks(data.drinks);
  //     } catch (error) {
  //       console.error("Error fetching drinks:", error);
  //     }
  //   };
  //   load();
  // }, []);

  return (
    <section className="container section">
      <header className="section-header">
        <h1>Drinks</h1>
        <p>Classic cocktails and signature mixes from the menu.</p>
      </header>
      <div className="grid">
        {drinks.map((drink) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strCategory,
            strInstructions,
          } = drink;

          return (
            <Link to={`/drinks/${idDrink}`} key={idDrink} className="card-link">
              <DrinkCard
                key={idDrink}
                strDrink={strDrink}
                strDrinkThumb={strDrinkThumb}
                strAlcoholic={strAlcoholic}
                strCategory={strCategory}
                strInstructions={strInstructions}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
}

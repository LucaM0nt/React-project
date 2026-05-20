import React from "react";

export default function DrinkCard({
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strCategory,
  strInstructions,
}) {
  return (
    <article className="card">
      <div className="card-media">
        {strDrinkThumb && (
          <img
            className="card-image"
            src={strDrinkThumb}
            alt={strDrink || "Drink"}
            loading="lazy"
          />
        )}
        {strAlcoholic && <span className="tag">{strAlcoholic}</span>}
      </div>
      <div className="card-body">
        {(strDrink || strCategory) && (
          <div className="card-header">
            {strDrink && <h2 className="card-title">{strDrink}</h2>}
            {strCategory && <span className="pill">{strCategory}</span>}
          </div>
        )}
        {strInstructions && (
          <p className="text-muted clamp-3">{strInstructions}</p>
        )}
      </div>
    </article>
  );
}

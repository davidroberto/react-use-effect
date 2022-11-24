import { useEffect, useState } from "react";

function App() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {

    (async () => {
      const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const cocktailsData = await cocktailsResponse.json();
      setCocktails(cocktailsData.drinks);
    })();

  }, []);

  const getIngredientsAsArray = (cocktail) => {
    const ingredientsAsArray = [];

    for (let i = 1; i <= 20; i++) {
      if (cocktail["strIngredient" + i]) {
        ingredientsAsArray.push(cocktail["strIngredient" + i])
      }
    }

    return ingredientsAsArray;
  }

  return (
    <main>
      {cocktails.map((cocktail) => {
        return (
          <article>
            <h2>{cocktail.strDrink}</h2>
            <p>{cocktail.strInstructions}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <p>{cocktail.strCategory}</p>

            <ul>
              {getIngredientsAsArray(cocktail).map((ingredient) => {
                return (<li>{ingredient}</li>)
              })}
            </ul>

          </article>
        )
      })}
    </main>
  );
}

export default App;

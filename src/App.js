import { useState } from "react";
import CocktailList from "./CocktailList";

function App() {

  const [randomCocktail, setRandomCocktail] = useState(null);

  const displayRandomMeal = async () => {
      const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const cocktailRandom = await cocktailResponse.json();  

      setRandomCocktail(cocktailRandom.drinks[0])
  }

  return (
    <>
      <button onClick={displayRandomMeal}>Afficher une recette</button>
      <div>
        {randomCocktail &&
          <h2>{randomCocktail.strDrink}</h2>
        }
      </div>
      <CocktailList />
    </>
  );
}

export default App;

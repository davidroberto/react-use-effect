import { useState } from "react";
import CocktailDetail from "./CocktailDetail";

const RandomCocktail = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);

    const displayRandomMeal = async () => {
        const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailRandom = await cocktailResponse.json();  
  
        setRandomCocktail(cocktailRandom.drinks[0])
    }

    return (
        <section>
            <button onClick={displayRandomMeal}>Afficher une recette</button>
            <div>
            {randomCocktail &&
                <CocktailDetail cocktail={randomCocktail}/>
            }
            </div>
        </section>
    )
}

export default RandomCocktail;
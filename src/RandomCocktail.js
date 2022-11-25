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
        <section className="random-cocktail-container">
            <h2 className="random-cocktail-title">Cocktail aléatoire : </h2>

            <div className="btn-random-container"> 
                <button className="btn-random" onClick={displayRandomMeal}>Afficher une recette</button>
            </div>

            {randomCocktail &&
                <div className="random-cocktail-info-container">
                    <CocktailDetail cocktail={randomCocktail}/>
                </div>
            }
        </section>
    )
}

export default RandomCocktail;
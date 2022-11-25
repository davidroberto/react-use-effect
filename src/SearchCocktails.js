

import { useState } from "react";
import CocktailDetail from "./CocktailDetail";

const SearchCocktails = () => {

    const [cocktailsFound, setCocktailsFound] = useState([]);

    const searchCocktails = async (event) => {
        event.preventDefault();

        const searchValue = event.target.search.value;
        const url = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue
        
        const cocktailsResponse = await fetch(url);
        const cocktailsData = await cocktailsResponse.json();
        
        setCocktailsFound(cocktailsData.drinks);
    }

    return (
        <nav className="nav">
            <form onSubmit={searchCocktails}>
                <label> Recherche :
                    <input type="text" name="search" />
                </label>
                <input type="submit" />
            </form>

            {cocktailsFound.map((cocktail) => {
                return (
                    <CocktailDetail key={cocktail.idDrink} cocktail={cocktail}  />
                )
            })}
        </nav>
    )
}

export default SearchCocktails;
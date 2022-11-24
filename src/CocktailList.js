import { useEffect, useState } from "react";
import CocktailDetail from "./CocktailDetail";

const CocktailList = () => {

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
  
      (async () => {
        const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const cocktailsData = await cocktailsResponse.json();
        setCocktails(cocktailsData.drinks);
      })();
  
    }, []);
  
    return (
        <main>
            {cocktails.map((cocktail) => {
                return (
                    <CocktailDetail key={cocktail.idDrink} cocktail={cocktail}  />
                )
            })}
        </main>
    );
}

export default CocktailList;
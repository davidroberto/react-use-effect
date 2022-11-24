import { useEffect, useState } from "react";
import CocktailDetail from "./CocktailDetail";
import { fetchCocktails } from "./utils/functions-utils";

const CocktailList = () => {

    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
  
      (async () => {
        const cocktailsData = await fetchCocktails();
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
export const getIngredientsAsArray = (cocktail) => {
    const ingredientsAsArray = [];

    for (let i = 1; i <= 20; i++) {
      if (cocktail["strIngredient" + i]) {
        ingredientsAsArray.push(cocktail["strIngredient" + i])
      }
    }

    return ingredientsAsArray;
  }

export const fetchCocktails = async () => {
    const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const cocktailsData = await cocktailsResponse.json();

    return cocktailsData;
}
const CocktailIngredients = (props) => {

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
        <ul>
            {getIngredientsAsArray(props.cocktail).map((ingredient) => {
                return (<li key={ingredient}>{ingredient}</li>)
            })}
        </ul>
    );
}

export default CocktailIngredients;
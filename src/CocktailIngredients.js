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
      <>
        <p>Ingrédients : </p>
        
        <ul className="ingredient-list">
            {getIngredientsAsArray(props.cocktail).map((ingredient) => {
                return (<li className="ingredient" key={ingredient}>{ingredient}</li>)
            })}
        </ul>
        </>
    );
}

export default CocktailIngredients;
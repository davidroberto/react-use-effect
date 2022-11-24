import { getIngredientsAsArray } from "./utils/functions-utils";

const CocktailIngredients = (props) => {

    return (
        <ul>
            {getIngredientsAsArray(props.cocktail).map((ingredient) => {
                return (<li key={ingredient}>{ingredient}</li>)
            })}
        </ul>
    );
}

export default CocktailIngredients;
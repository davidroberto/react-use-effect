import CocktailIngredients from "./CocktailIngredients";

const CocktailDetail = (props) => {

    return (
        <article>
            <h2>{props.cocktail.strDrink}</h2>
            <p>{props.cocktail.strInstructions}</p>
            <img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink}/>
            <p>{props.cocktail.strCategory}</p>

            <CocktailIngredients cocktail={props.cocktail}/>

        </article>
    );
}

export default CocktailDetail;
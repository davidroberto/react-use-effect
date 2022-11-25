import CocktailIngredients from "./CocktailIngredients";

const CocktailDetail = (props) => {

    return (
        <article className="cocktail-info">
            <h2>{props.cocktail.strDrink}</h2>
            <p>{props.cocktail.strInstructions}</p>
            <img className="cocktail-info-image" src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink}/>
            <p>Category : {props.cocktail.strCategory}</p>

            <CocktailIngredients cocktail={props.cocktail}/> 

        </article>
    );
}

export default CocktailDetail;
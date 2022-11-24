import { useEffect, useState } from "react";

function App() {
  // je créé un state pour les cocktails
  // par défaut, ma variable de state "cocktails" contient aun tableau
  // vide
  // useState me fournit également une fonction qui permet de mettre
  // à jour la variable du state et de recharger mon composant
  const [cocktails, setCocktails] = useState([]);

  // j'utilise la fonction useEffect (qui est un "hook") de react, avec 
  // en premier parametre une fonction et en second un tableau vide
  // pour que le code de la fonction ne s'execute qu'une seule fois
  // lors du premier rendu du composant
  useEffect(() => {
    // je veux faire un appel fetch (asynchrone donc)
    // pour ça, je déclare une fonction anonyme qui s'auto invoque 
    // pour éviter de devoir mettre des awaits partout
    // cette fonction récupère les données sur mon api
    // et les stocke dans le state
    (async () => {
      const cocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const cocktailsData = await cocktailsResponse.json();
      setCocktails(cocktailsData.drinks);
    })();
  }, []);

  return (
    <main>
      {/* 
        Je boucle sur les cocktails stockés dans mon state :
        au premier rendu c'est un tableau vide donc ça affiche rien
        après l'appel vers l'api, le composant est re-rendu (vu qu'on appelle setCocktail)
        et mes données sont dispos
       */}
      {cocktails.map((cocktail) => {
        return (
          <article>
            <h2>{cocktail.strDrink}</h2>
          </article>
        )
      })}
    </main>
  );
}

export default App;

import CocktailList from "./CocktailList";
import RandomCocktail from "./RandomCocktail";
import SearchCocktails from "./SearchCocktails";
import './app.css';

function App() {

  return (
    <>
      <header>
        <SearchCocktails />
      </header>
      <main>
        <RandomCocktail />
        <CocktailList />
      </main>
    </>
  );
}

export default App;

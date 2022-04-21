import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Pokemon from './Components/Pokemon';
import { useState } from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import PokemonFunctional from './Components/PokemonFunctional';

function App() {
  const [showPokemon, setShowPokemon] = useState(null)
  
  return (
    <div className="App">
      <ErrorBoundary>
        <Counter/>
        <button onClick={() => setShowPokemon(!showPokemon)}>show pokemon</button>
        <hr/>
        {showPokemon && <PokemonFunctional/>}
      </ErrorBoundary>
    </div>
  );
}

export default App;

import './App.css';
import Game from './components/game';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/left-poke-ball.png' alt='pokeball'></img>
        <h2>PokeMemory</h2>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/left-poke-ball.png' alt='pokeball'></img>
      </div>
      <Game/>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;

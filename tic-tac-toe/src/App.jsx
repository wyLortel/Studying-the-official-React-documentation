import { useState } from "react";
import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";


function deriveActivePlayer(gameTurns){
  let currentPlayer = 'x';

  if(gameTurns.length >0 && gameTurns[0].player === 'x'){
    currentPlayer ='o'
  }

  return currentPlayer
}


function App() {
  const [gameTurns, setGameturn] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("x");

  const activePlayer = deriveActivePlayer(gameTurns);   

  function handleSelextSquare(rowIndex, colIndex) {
    setGameturn((preTurns) => {
      const currentPlayer = deriveActivePlayer(preTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...preTurns, 
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player
            initialName='player 1'
            symbol='x'
            isActive={activePlayer === "x"}
          />
          <Player
            initialName='player 2'
            symbol='o'
            isActive={activePlayer === "o"}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelextSquare} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

import React from 'react';

const GameState = ({ gameState, renderComponent, userChoice, computerChoice, restartGame }) => {
  return (
    <>{gameState &&
    <div className={`game-state ${gameState}`}>
      <div>
        <div className="game-state-content">
          <p>{renderComponent(userChoice)}</p>
          {gameState === 'win' && <p>Congrats! You won!</p>}
          {gameState === 'lose' && <p>Sorry! You lost!</p>}
          {gameState === 'draw' && <p>Draw round!</p>}
          <p>{renderComponent(computerChoice)}</p>
        </div>
        <button onClick={() => restartGame()} >Play again</button>
      </div>
    </div>}
    </>
  );
};

export default GameState;

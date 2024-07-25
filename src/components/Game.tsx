import React, { useContext } from 'react';
import Board from './Board';
import { GameContext } from './GameProvider';
import '../styles/Game.css';

const Game: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error('GameContext must be used within a GameProvider');
  }

  return (
    <div className="game">
        <h1>Welcome to Tic-Tac-Toe</h1>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div className="scoreboard">
          <div className="score">X: {gameContext.xScore}</div>
          <div className="score">O: {gameContext.oScore}</div>
        </div>
        <button className="reset-button" onClick={gameContext.resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;

// src/components/Game.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Board from './Board';
import { GameContext } from './GameProvider';
import '../styles/Game.css';

const Game: React.FC = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext) {
    throw new Error('Game must be used within a GameProvider');
  }

  const { resetGame } = gameContext;

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <button onClick={resetGame}>Reset</button>
      </div>
      <Link to="/scoreboard">Go to Scoreboard</Link>
    </div>
  );
};

export default Game;

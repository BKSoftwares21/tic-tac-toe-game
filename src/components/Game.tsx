// src/components/Game.tsx
import { useContext } from 'react';
import React from 'react';
import Board from './Board';
import { GameProvider, GameContext } from './GameProvider';
import './Game.css';

const Game: React.FC = () => {
  const gameContext = useContext(GameContext);

  return (
    <GameProvider>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <button className="reset-button" onClick={gameContext?.resetGame}>Reset Game</button>
        </div>
      </div>
    </GameProvider>
  );
};

export default Game;

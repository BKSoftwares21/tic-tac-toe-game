// src/components/Scoreboard.tsx
import React, { useContext } from 'react';
import { GameContext } from './GameProvider';

const Scoreboard: React.FC = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext) {
    throw new Error('Scoreboard must be used within a GameProvider');
  }

  const { xScore, oScore } = gameContext;

  return (
    <div className="scoreboard">
      <h2>Scoreboard</h2>
      <div className="score">
        <span>Player X: {xScore}</span>
        <span>Player O: {oScore}</span>
      </div>
    </div>
  );
};

export default Scoreboard;

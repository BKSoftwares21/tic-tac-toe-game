// src/pages/GamePage.tsx
import React from 'react';
import Game from '../components/Game';
import { GameProvider } from '../components/GameProvider';

const GamePage: React.FC = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default GamePage;

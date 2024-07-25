// src/pages/ScoreboardPage.tsx
import React from 'react';
import Scoreboard from '../components/Scoreboard';
import { GameProvider } from '../components/GameProvider';

const ScoreboardPage: React.FC = () => (
  <GameProvider>
    <Scoreboard />
  </GameProvider>
);

export default ScoreboardPage;

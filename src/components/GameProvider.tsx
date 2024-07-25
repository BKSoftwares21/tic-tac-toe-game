// src/components/GameProvider.tsx
import React, { createContext, useState, ReactNode } from 'react';
import { calculateWinner } from '../utils/CalculateWinner';

interface GameContextType {
  squares: (string | null)[];
  xIsNext: boolean;
  handlePlay: (nextSquares: (string | null)[]) => void;
  resetGame: () => void;
  xScore: number;
  oScore: number;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);

// Define the props for GameProvider
interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  function handlePlay(nextSquares: (string | null)[]) {
    const winner = calculateWinner(nextSquares);
    if (winner) {
      if (winner === 'X') setXScore(xScore + 1);
      if (winner === 'O') setOScore(oScore + 1);
      setSquares(Array(9).fill(null)); // Reset the board after a win
    } else {
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <GameContext.Provider value={{ squares, xIsNext, handlePlay, resetGame, xScore, oScore }}>
      {children}
    </GameContext.Provider>
  );
};

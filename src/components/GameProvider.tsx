// src/components/GameProvider.tsx
import React, { createContext, useState, ReactNode } from 'react';


interface GameContextProps {
    xIsNext: boolean;
    squares: (string | null)[];
    xScore: number;
    oScore: number;
    handlePlay: (nextSquares: (string | null)[]) => void;
    resetGame: () => void;
  }
  
  export const GameContext = createContext<GameContextProps | undefined>(undefined);
  
  export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [xScore, setXScore] = useState(0);
    const [oScore, setOScore] = useState(0);
  
    function handlePlay(nextSquares: (string | null)[]) {
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
  
      const winner = calculateWinner(nextSquares);
      if (winner === 'X') {
        setXScore(xScore + 1);
      } else if (winner === 'O') {
        setOScore(oScore + 1);
      }
    }
  
    function resetGame() {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    }
  
    return (
      <GameContext.Provider value={{ xIsNext, squares, xScore, oScore, handlePlay, resetGame }}>
        {children}
      </GameContext.Provider>
    );
  };
  
  function calculateWinner(squares: (string | null)[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    if (squares.every(square => square !== null)) {
      return 'Draw';
    }
  
    return null;
  }
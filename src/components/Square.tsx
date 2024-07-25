// src/components/Square.tsx
import React, { useContext } from 'react';
import { GameContext } from './GameProvider';
import calculateWinner from '../utils/CalculateWinner';

interface SquareProps {
  index: number;
}

const Square: React.FC<SquareProps> = ({ index }) => {
  const gameContext = useContext(GameContext);
  if (!gameContext) {
    throw new Error('Square must be used within a GameProvider');
  }
  const { squares, handlePlay, xIsNext } = gameContext;

  function handleClick() {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = 'X';
    } else {
      nextSquares[index] = 'O';
    }
    handlePlay(nextSquares);
  }

  return (
    <button className="square" onClick={handleClick}>
      {squares[index]}
    </button>
  );
};

export default Square;

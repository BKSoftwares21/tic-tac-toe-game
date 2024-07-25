// src/components/Board.tsx
import React, { useContext } from 'react';
import Square from './Square';
import { GameContext } from './GameProvider';
import calculateWinner from '../utils/calculateWinner';

const Board: React.FC = () => {
  const gameContext = useContext(GameContext);
  if (!gameContext) {
    throw new Error('Board must be used within a GameProvider');
  }
  const { squares, xIsNext } = gameContext;

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = winner === 'Draw' ? "It's a Draw!" : 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>
      <div className="board-row">
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>
      <div className="board-row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </>
  );
};

export default Board;

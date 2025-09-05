import { useEffect, useState } from "react";
import Cell from "../Cell";
import './index.css';

const grid = Array.from({ length: 3}, () => Array(3).fill(null));
const PlayerValue = new Map();
PlayerValue.set(1, 'O');
PlayerValue.set(2, 'X');

const digonal1 = [[0,0], [1,1], [2,2]];
const digonal2 = [[0,2], [1,1], [2,0]];

const TicTacToe = () => {
  const [board, setBoard] = useState(Array.from({ length: 3}, () => Array(3).fill(null)));
  const [turn, setTurn] = useState(1);
  const [winner, setWinner] = useState(null);
  const [move, setMove] = useState(0);
  const [draw, setDraw] = useState(false);
  const [winningCell, setWinningCell] = useState([]);

  const onCellClick = (row, col) => {
    const newBoard = [...board]
    newBoard[row][col] = PlayerValue.get(turn);
    setBoard(newBoard);
    if (row+col === 2 || Math.abs(row-col) === 0) {
      if (checkDigonals(row, col) || checkRow(row) || checkColumn(col)) {
        setWinner(turn);
      }
    } else {
      if (checkRow(row) || checkColumn(col)) {
      setWinner(turn);
    }
    }
    setTurn((prev) => prev === 1 ? 2 : 1);
    setMove(prev => prev+1);
  }

  const isSafe = (row, col) => {
    return row >= 0 && row < 3 && col >= 0 && col < 3;
  }

  const checkDrawStatus = () => {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (board[r][c] === null) return;
      }
    }

    setDraw(true);
  }

  useEffect(() => {
    if (move === 9 && !winner) {
      checkDrawStatus()
    }
  }, [move, winner])


  const checkDigonals = (row, col) => {
    let r = 0, c = 0;
    let isMatched = true;
    let cells = [];
    while(r < 3 && c < 3) {
      if (board[r][c] !== PlayerValue.get(turn)) {
        isMatched = false;
        break;
      }
      cells.push([r, c]);
      r++;
      c++;
    }
    if (isMatched) {
      setWinningCell(cells.join(''));
      return true;
    }

    r = 0;
    c = 2;
    cells = [];

    while(r < 3 && c >= 0) {
      if (board[r][c] !== PlayerValue.get(turn)) {
        isMatched = false;
        break;
      }
      r++;
      c--;
      cells.push([r, c].join(''));
    }

    if (isMatched) setWinningCell(cells);

    return isMatched;
  }

  const checkRow = (row) => {
    for(let col = 0; col < 3; col++) {
      if (board[row][col] !== PlayerValue.get(turn)) return false;
    }
    return true;
  }

  const checkColumn = (col) => {
    for(let row = 0; row < 3; row++) {
      if (board[row][col] !== PlayerValue.get(turn)) return false;
    }
    return true;
  }

  const reset = () => {
    setBoard(Array.from({ length: 3}, () => Array(3).fill(null)));
    setTurn(1);
    setWinner(null);
  }

  const renderBoard = () => {
    return (
      <div className="board-container">
        {
          board.map((row, rowIndex) =>
            row.map((col, colIndex) =>
            <Cell
              row={rowIndex}
              col={colIndex}
              value={board[rowIndex][colIndex]}
              onCellClick={onCellClick}
              disabled={winner !== null}
              isWinningCell={winningCell.includes(`${rowIndex}${colIndex}`)}
            />
          ))
        }
      </div>
    )
  }


  return (
      <div className="game-container">
      <h1 class="header">Tic Tac Toe</h1>
      <div className="game-board-header">
          <div>Current Turn</div>
          <div>{`Player ${turn}`}</div>
        </div>
      {/* Game board and logic will go here */}
      {renderBoard()}

      {draw && <div className="winner-info">Match id drawn!!</div>}

      {winner && <div className="winner-info">
        {`Player ${turn} won the game. Congratulations!!!`}
      </div>}

      {(winner || draw) && <div>
        <button onClick={reset} className="reset-button">Play Again</button>
      </div>}
      </div>
  );
};

export default TicTacToe;
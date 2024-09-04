import { useState } from "react";


function Square({ value, onSquareClick }) {

  return (
    <>
      <button
        onClick={onSquareClick}
        className="square" >
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  
  
  function handleClick() {
    console.log("Clicked")
  }

  return (
    <>
      <div className="board-row">
        <Square onSquareClick={handleClick} value={squares[0]} />
        <Square onSquareClick={handleClick} value={squares[1]} />
        <Square onSquareClick={handleClick} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={handleClick} value={squares[3]} />
        <Square onSquareClick={handleClick} value={squares[4]} />
        <Square onSquareClick={handleClick} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={handleClick} value={squares[6]} />
        <Square onSquareClick={handleClick} value={squares[7]} />
        <Square onSquareClick={handleClick} value={squares[8]} />
      </div>
    </>
  );
}

import { useState } from "react";
let btnwinner = document.getElementsByClassName("square");

function Square({ value, onSquareClick }) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsnext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare =  squares.slice()
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    setSquares(nextSquare);
    setXIsnext(!xIsNext);
  }
function resetGame() {
  setSquares(Array(9).fill(null))
status = `Next Player is: "${setXIsnext(!xIsNext)}`;
for (const btn of btnwinner) {
  btn.classList.remove("winele")
}
  console.log(btnwinner)
}


  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner} `;
  } else {
    status = `Next Player is: "${xIsNext ? "X" : "O"}"`;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <button onClick={resetGame} className="resetbtn" >
        Reset
      </button>
    </>
  );
}

function calculateWinner(squares) {
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
      btnwinner[a].classList.add("winele");
      btnwinner[b].classList.add("winele");
      btnwinner[c].classList.add("winele");
      return squares[a];
    }
  }
  return null;
}

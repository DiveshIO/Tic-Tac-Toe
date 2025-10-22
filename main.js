// Board representation with an array of 9 positions
let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
// name of the current player
let currentPlayer = "X";

let gameActive = true;

function printBoard() {
  console.log("Current Board:");
  console.log(`
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
         ---------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
         ---------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
        `);
}

function handleMove(position) {
  if (gameBoard[position] == " ") {
    gameBoard[position] = currentPlayer;ß
  } else {
    console.log("Position already taken. Try again.");
    return false;
  }

  if (checkWin()) {
    printBoard();
    console.log(`Player ${currentPlayer} has won!`);
    gameActive = false;
    return true;
  }
  if (checkDraw()) {
    printBoard();
    console.log("The game is a draw!");
    gameActive = false;
    return true;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  return true;
}
function checkDraw() {
  return gameBoard.every((cell) => cell !== " ");
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], // Row 1 => X X X
    [3, 4, 5], // Row 2 => X X X
    [6, 7, 8], // Row 3 => X X X
    [0, 3, 6], // Column 1 => X X X
    [1, 4, 7], // Column 2 => X X X
    [2, 5, 8], // Column 3 => X X X
    [0, 4, 8], // Diagonal => X X X
    [2, 4, 6], // Diagonal => X X X
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return (
      gameBoard[a] === currentPlayer &&
      gameBoard[b] === currentPlayer &&
      gameBoard[c] === currentPlayer
    );
  });
}
console.log("Welcome to Tic-Tac-Toe!");
console.log("Players take turns to place their marks (X and O) on the board.");
console.log("Enter -1 to exit the game at any time.");
while (gameActive) {
  printBoard();
  let position = prompt(`Player ${currentPlayer}, enter your move (0-8): `);
  position = parseInt(position);
  if (position === -1) {
    console.log("Game exited.");
    break;
  }
  if (position >= 0 && position <= 8) {
    handleMove(position);
  } else {
    console.log("Invalid input. Please enter a number between 0 and 8.");
  }
}

const X_grid = "x";
const circle_grid = "circle";
const winArrays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const winnerDisplayInfo = document.querySelector("[winnerDisplayInfo]");
const winnerMessageElement = document.getElementById("winnerMessage");
const resetBtn = document.getElementById("resetBtn");
const gridElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
let circleTurn;

beginGame();

resetBtn.addEventListener("click", beginGame);

function beginGame() {
  circleTurn = false;
  gridElements.forEach((cell) => {
    cell.classList.remove(X_grid);
    cell.classList.remove(circle_grid);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  hoverTurn();
  winnerMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? circle_grid : X_grid;
  placeMark(cell, currentClass);
  if (checkWinner(currentClass)) {
    endGame(false);
  }
  switchTurns();
  hoverTurn();
}
function endGame(draw) {
  if (draw) {
  } else {
    winnerDisplayInfo.innerText = `${circleTurn ? "O" : "X"} Wins`;
  }
  winnerMessageElement.classList.add("show");
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function switchTurns() {
  circleTurn = !circleTurn;
}

function hoverTurn() {
  board.classList.remove(X_grid);
  board.classList.remove(circle_grid);
  if (circleTurn) {
    board.classList.add(circle_grid);
  } else {
    board.classList.add(X_grid);
  }
}

function checkWinner(currentClass) {
  return winArrays.some((combination) => {
    return combination.every((index) => {
      return gridElements[index].classList.contains(currentClass);
    });
  });
}

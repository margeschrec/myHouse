const squares = document.querySelectorAll(".square");
const vision = document.querySelectorAll(".vision");
let score = document.querySelector("#score");
let lastSquare;

let timeUp = false;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(squares) {
  const idx = Math.floor(Math.random() * squares.length);
  let square = squares[idx];
  if (square == lastSquare) {
    return randomHole(squares);
  }
  lastSquare = square;
  return square;
}

function showDream() {
  const time = randomTime(200, 1000);
  const square = randomHole(squares);
  square.classList.add("vision");
  setTimeout(() => {
    square.classList.remove("vision");
    if (!timeUp) showDream();
  }, time);
}

function startGame() {
  timeUp = false;
  showDream();
  setTimeout(() => (timeUp = true), 20000);
}

function hitDream(e) {
  console.log(e);
}

square.forEach(square =>square.addEventListener('click', console.log(square)));

startGame();

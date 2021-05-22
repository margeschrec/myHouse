const squares = document.querySelectorAll(".square");
const vision = document.querySelectorAll(".vision");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");
let hitPosition = null;
let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("vision");
  });
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("vision");
  //asign the id of the randomPooition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

function moveVision() {
  // let timerId = null;
  setInterval(randomSquare, 1000);
  setInterval(countDown, 1000);
}

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    let dreams = document.getElementById("dreamContainer");
    dreams.classList.add("d-none");
    let bird = document.getElementById("wakeUp");
    bird.classList.remove("d-none");
    document.body.style.backgroundColor = "lightblue";
    clearInterval(timerId);
    alert("Wakey Wakey");
  }
}

// let timerId = setInterval(countDown, 1000);

squares.forEach((square) => {
  square.addEventListener("click", () => {
    if (square.id === hitPosition) {
      console.log(square.id);
      result++;
      score.textContent = result;
      console.log("score after ", score);
    }
  });
});

moveVision();

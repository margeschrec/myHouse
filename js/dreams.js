const square = document.querySelectorAll(".square");
const vision = document.querySelectorAll(".vision");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((classname) => {
    classname.classList.remove("vision");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("vision");

  //asign the id of the randomPooition to hitPosition for us to use later
  let hitPosition = randomPosition.id;
  return hitPosition;
}

var hitScore = randomSquare();

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitScore) {
      result++;
      score.textContent = result;
    }
  });
});

function moveVision() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveVision();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    let dreams = document.getElementById("dreamContainer");
    dreams.classList.add("d-none");
    clearInterval(timerId);
    alert("Wakey Wakey");
  }
}

let timerId = setInterval(countDown, 1000);

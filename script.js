let startBtn = document.getElementById("start");

let startScreen = document.getElementById("rectangle");
let gameScreen = document.getElementById("game-container");
let instructionsScreen = document.getElementById("instructions-container");
let titleScreen = document.getElementById("title");
let resetButton = document.getElementById("reset");
let circleId = document.getElementById("circle");
let colorArr = ['blue', 'red', 'green', 'black'];
const scoreElement = document.querySelector(".score");
const timeElement = document.querySelector(".timer");
let intervalId;

let score = 0;
let timer = 10;


///////////////// TIMER ///////////

function startTimer() {
  intervalId = setInterval(() => {
    if (timer <= 0) {
      clearInterval(intervalId);
      alert("GAME-OVER")
    } else {
      timer--;
      timeElement.innerText = `Timer: ${timer}`;
      console.log("timer");

    }
  }, 1000);
}



//////////////////// START ///////////

startBtn.addEventListener("click", (event) => {

  startScreen.style.display = "none";
  gameScreen.style.display = "flex";
  instructionsScreen.style.display = "none";
  titleScreen.style.display = "none";
  scoreElement.innerText = "Score: 0";
  startTimer();


  console.log(event.target)

});



////////////// L //////////

document.addEventListener("keydown", (event) => {
  if (event.key === "L") {

    const index = parseInt(Math.random() * colorArr.length);

    circleId.style.backgroundColor = colorArr[index];
    score++;
    scoreElement.innerText = `Score: ${score}`;
    if (score == 30) {
      alert("WIN");

    }
  }
  console.log(event);
});

////////////// V /////////////

document.addEventListener("keydown", (event) => {
  if (event.key === "V") {

    const index = parseInt(Math.random() * colorArr.length);
    circleId.style.backgroundColor = colorArr[index];

    score++;
    scoreElement.innerText = `Score: ${score}`;
    if (score == 30) {
      alert("WIN");

    }
  }

  console.log(event);
});

//////////////// A ///////////////


document.addEventListener("keydown", (event) => {
  if (event.key === "A") {

    const index = parseInt(Math.random() * colorArr.length);
    circleId.style.backgroundColor = colorArr[index];

    score++;
    scoreElement.innerText = `Score: ${score}`;
    if (score === 30) {
      alert("WIN");

    }

  }
  console.log(event);
});

/////////////////// T ////////////////


document.addEventListener("keydown", (event) => {
  if (event.key === "T") {

    const index = parseInt(Math.random() * colorArr.length);
    circleId.style.backgroundColor = colorArr[index];
    score++;
    scoreElement.innerText = `Score: ${score}`;
    if (score == 30) {
      alert("WIN");


    }
  }
  console.log(event);
});


///////////// RESET /////////////


resetButton.addEventListener("click", (event) => {
  startScreen.style.display = "flex";
  gameScreen.style.display = "none";
  instructionsScreen.style.display = "flex";
  titleScreen.style.display = "flex";

  score = 0;
  timer = 10;

  scoreElement.innerText = `Score: ${score}`;
  timeElement.innerText = `Timer: ${timer}`;

});








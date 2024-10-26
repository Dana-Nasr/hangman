var words = [
  "HELLO",
  "JAVA",
  "DICTOIONARY",
  "HANGMAN",
  "DEVELOPER",
  "HTML",
  "APPLE",
];
var word;
var answer = document.getElementById("answer-section");
var start = document.getElementById("start-button");
var pressedLetter = document.querySelectorAll(".letter");



start.addEventListener("click", startGame);

function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  drawDashes();
}

function drawDashes() {
  answer.textContent = word
    .split("")
    .map((letter) => "_")
    .join(" ");
}



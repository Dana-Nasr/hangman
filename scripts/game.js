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
var guessed_letters = "";
var dash;
var flag = 0;
var hang = 0;
window.addEventListener("keydown", checkIfEnter);

function checkIfEnter(event) {
  if (event.key == "Enter") {
    startGame();
  }
}
function startGame() {
  word = words[Math.floor(Math.random() * words.length)];
  drawDashes();
}

function drawDashes() {
  dash = answer.textContent = word
    .split("")
    .map(() => "_")
    .join(" ");

  document.querySelectorAll(".letter").forEach((letter) => {
    letter.addEventListener("click", () => {
      checkCorrectLetters(letter.textContent);
    });
  });
}

function checkCorrectLetters(gussed_letter) {
  var n_dash = dash.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i] === gussed_letter) {
      n_dash[i] = word[i];
      flag = 1;
      console.log(n_dash);
    }
  }
  if (flag === 0) {
    hang = hang + 1;
    console.log(hang);
  }
  flag = 0;
  dash = n_dash.join(" ");
  answer.textContent = dash;
}

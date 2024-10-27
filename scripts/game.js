var words = [
  "HELLO",
  "JAVASCRIPT",
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
var textNode = document.createTextNode("Press enter to start");
document.querySelector(".hangman").appendChild(textNode);

window.addEventListener("keydown", checkIfEnter);  //listen key board check if key enter

function checkIfEnter(event) {
  if (event.key == "Enter") {
    document.querySelector(".hangman").removeChild(textNode); //remove to delete press enter to strt
    startGame();
  }
}
function startGame() {
  word = words[Math.floor(Math.random() * words.length)]; //radom choice of word from the array
  drawDashes();
}

function drawDashes() { //display dashes on screen split every letter alone and represent by dash
  dash = answer.textContent = word
    .split("")
    .map(() => "_")
    .join(" ");

  document.querySelectorAll(".letter").forEach((letter) => {   //when the user press a letter removes it and check if correct 
    letter.addEventListener("click", () => {
      letter.style.display = "none";
      checkCorrectLetters(letter.textContent);
    });
  });
}

function checkCorrectLetters(gussed_letter) {
  var n_dash = dash.split(" ");
  for (let i = 0; i < word.length; i++) { //traversal of word str and check with guessed letter o(n)
    if (word[i] === gussed_letter) {
      n_dash[i] = word[i];      //create new lst to save letters 
      flag = 1;                 //flag to detect letter is found else add part to hang
      console.log(n_dash);
    }
  }
  if (flag === 0) {
    hang = hang + 1;
    addParts(hang);
  }
  flag = 0;
  dash = n_dash.join(" "); //change list to str and display
  answer.textContent = dash;
}

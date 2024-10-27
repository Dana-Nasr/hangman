var hangman = document.querySelector(".hang");
var part;
function createParts(source, css_class) {
  part = document.createElement("img");
  part.setAttribute("src", source);
  part.setAttribute("class", css_class);
  return part;
}


function addParts(hang) {           //ading parts to the hangman whn letter guesed wrong o(1)
  if (hang === 1) {
    part = createParts("./assets/head.svg", "head");
    hangman.appendChild(part);
  } else if (hang === 2) {
    part = createParts("./assets/body.svg", "body");
    hangman.appendChild(part);
  } else if (hang === 3) {
    part = createParts("./assets/left-hand.svg", "left-hand");
    hangman.appendChild(part);
  } else if (hang === 4) {
    part = createParts("./assets/right-hand.svg", "right-hand");
    hangman.appendChild(part);
  } else if (hang === 5) {
    part = createParts("./assets/left-leg.svg", "left-leg");
    hangman.appendChild(part);
  } else if (hang === 6) {
    part = createParts("./assets/right-leg.svg", "right-leg");
    hangman.appendChild(part);
  } else {
    var textNode = document.createTextNode("GAME OVERR :(");
    document.querySelector(".hangman").appendChild(textNode);
  }
}

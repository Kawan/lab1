window.onload = main;

let i = 0;
let differentTexts = [
  "Sometimes you need to try hard to reach your goal. <br> Finding solution can be hard sometimes.</br> He tells you that you have enter 6b 65 79. huh.",
  "Looks you found your first text, here is next one",
  "congrats, you just won!",
];

function main() {
  playGame();
  userInput();
}

function playGame() {
  let h1 = (document.getElementById("changeText").innerHTML +=
    differentTexts[i]);
}

function clearText() {
  let text = document.getElementById("changeText");
  while (text.firstChild) text.removeChild(text.firstChild);
}

function clearInput() {
  document.getElementById("user-input").value = "";
}

let validation = 0;

function userInput() {
  let input = document.getElementById("user-input").value.toLowerCase();
  switch (input) {
    case "key":
      if (validation == 0) {
        clearText();
        clearInput();
        i += 1;
        validation += 1;
        playGame();
      }
      break;
    case "something":
      if (validation == 1) {
        clearText();
        clearInput();
        i += 1;
        playGame();
      }
      break;
  }
}

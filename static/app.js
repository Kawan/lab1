// Wait for the website to load
window.onload = main;

// Where it picks up first sentence
let i = 0;

// Different texts where we can use it later
let differentTexts = [
  "Sometimes you need to try hard to reach your goal. <br> Finding solution can be hard sometimes.</br> He tells you that you have enter 6b 65 79. huh.",
  "Looks you found your first text, here is next one. Don't use inspect element.",
  "congrats, you just found every word",
];

// Call the function to load
function main() {
  playGame();
  userInput();
}

// Get the text and put the first sentence
function playGame() {
  document.getElementById("changeText").innerHTML += differentTexts[i];
}

// Clear text in every corrected answer
function clearText() {
  let text = document.getElementById("changeText");
  while (text.firstChild) text.removeChild(text.firstChild);
}

// Clear input text in every corrected answer
function clearInput() {
  document.getElementById("user-input").value = "";
}

let validation = 0;

// User input where it checks if the case same as inputed and starts the next question
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
    case "element":
      if (validation == 1) {
        clearText();
        clearInput();
        i += 1;
        playGame();
      }
      break;
  }
}

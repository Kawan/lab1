// Wait for the website to load
window.onload = main;

// Where it picks up first sentence
let i = 0;

// Call the function to load
function main() {
  playGame();
  userInput();
}

// Get the text and put the first sentence (i)
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
  inputkey = document.getElementById("user-input").value = "";
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
        validation += 1;
        playGame();
      }
      break;
    case "happy":
      if (validation == 2) {
        clearText();
        clearInput();
        i += 1;
        validation += 1;
        playGame();
      }
      break;
  }
}

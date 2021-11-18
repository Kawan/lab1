window.onload = main;
const hiddenKey = ["Key", "key"];

let input = "";

let differentTexts = {
  firstText: {
    texten:
      "Sometimes you need to try hard to reach your goal. <br> Finding solution can be hard sometimes.</br> He tells you that you have enter 6b 65 79. huh.",
  },
  secondText: {
    textet: "Looks you found your first text, here is next one",
  },
};

function main() {
  playGame();
}

function playGame() {
  let h2 = (document.getElementById("changeText").innerHTML +=
    differentTexts.firstText.texten);
}

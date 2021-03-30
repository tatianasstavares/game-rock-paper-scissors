const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.getElementById("result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const choiceNames = {
  r: "Rock",
  p: "Paper",
  s: "Scissors",
};

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const includeClass = document.getElementById(userChoice);

  function removeClassAfterTime(className, time = 1000) {
    setTimeout(() => includeClass.classList.remove(className), time);
  }

  function win() {
    userScore_span.innerHTML = parseInt(userScore_span.innerHTML) + 1;
    result_p.innerHTML = `${choiceNames[userChoice]} beats ${choiceNames[computerChoice]}. You Win! 🥇`;
    includeClass.classList.add("greenResult");
    removeClassAfterTime("greenResult");
  }

  function loser() {
    computerScore_span.innerHTML = parseInt(computerScore_span.innerHTML) + 1;
    result_p.innerHTML = `${choiceNames[userChoice]} loses to ${choiceNames[computerChoice]}. You Lost! 🤯`;
    includeClass.classList.add("redResult");
    removeClassAfterTime("redResult");
  }

  function draw() {
    result_p.innerHTML = "it's a draw! 🤝";
    includeClass.classList.add("grayResult");
    removeClassAfterTime("grayResult");
  }

  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      return win();
    case "rp":
    case "ps":
    case "sr":
      return loser();
    default:
      return draw();
  }
}

function main() {
  rock_div.addEventListener("click", () => playGame("r"));
  paper_div.addEventListener("click", () => playGame("p"));
  scissors_div.addEventListener("click", () => playGame("s"));
}

main();

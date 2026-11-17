let humanScore = 0;
let computerScore = 0;

const roundResultEl = document.querySelector("#round-result");
const scoreEl = document.querySelector("#score");
const finalWinnerEl = document.querySelector("#final-winner");
const choiceButtons = document.querySelectorAll("#choices button");
const resetButton = document.querySelector("#reset");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  if (randomNumber === 1) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  if (humanScore === 5 || computerScore === 5) return;

  if (humanChoice === computerChoice) {
    roundResultEl.textContent = `It's a tie! Both chose ${humanChoice}.`;
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    roundResultEl.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResultEl.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
  }

  scoreEl.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    finalWinnerEl.textContent = "Congratulations! You won the game!";
    toggleGameOver(true);
  } else if (computerScore === 5) {
    finalWinnerEl.textContent = "Game over! The computer won.";
    toggleGameOver(true);
  }
}

function toggleGameOver(isOver) {
  choiceButtons.forEach((button) => {
    button.disabled = isOver;
  });

  if (resetButton) {
    resetButton.style.display = isOver ? "inline-block" : "none";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundResultEl.textContent = "Choose a weapon to start the game!";
  scoreEl.textContent = "You: 0 | Computer: 0";
  finalWinnerEl.textContent = "";
  toggleGameOver(false);
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});

if (resetButton) {
  resetButton.addEventListener("click", resetGame);
}
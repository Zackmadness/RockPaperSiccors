let humanScore = 0;
let computerScore = 0;

const humanScoreEl = document.querySelector("#human-score");
const computerScoreEl = document.querySelector("#computer-score");

const roundResultEl = document.querySelector("#round-result");
const finalWinnerEl = document.querySelector("#final-winner");

const choiceButtons =
    document.querySelectorAll("#choices button");

const resetButton =
    document.querySelector("#reset");

const winsEl =
    document.querySelector("#wins");

const lossesEl =
    document.querySelector("#losses");

const tiesEl =
    document.querySelector("#ties");


let stats = JSON.parse(
    localStorage.getItem("rpsStats")
) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateStatsDisplay();

function getComputerChoice() {

    const choices = [
        "rock",
        "paper",
        "scissors"
    ];

    return choices[
        Math.floor(
            Math.random() * choices.length
        )
    ];
}

function animateResult() {
    roundResultEl.classList.remove(
        "win-animation"
    );

    void roundResultEl.offsetWidth;

    roundResultEl.classList.add(
        "win-animation"
    );
}

function playRound(
    humanChoice,
    computerChoice
) {

    if (
        humanScore === 5 ||
        computerScore === 5
    ) {
        return;
    }

    animateResult();

    if (
        humanChoice === computerChoice
    ) {

        stats.ties++;

        roundResultEl.textContent =
            `Tie! Both chose ${humanChoice}.`;

        saveStats();
        return;
    }

    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    const humanWins =
        winningMoves[humanChoice] ===
        computerChoice;

    if (humanWins) {

        humanScore++;

        stats.wins++;

        roundResultEl.textContent =
            `You win! ${humanChoice} beats ${computerChoice}.`;

    } else {

        computerScore++;

        stats.losses++;

        roundResultEl.textContent =
            `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    updateScores();

    saveStats();

    if (humanScore === 5) {

        finalWinnerEl.textContent =
            "🎉 You Won The Match!";

        toggleGameOver(true);

    } else if (computerScore === 5) {

        finalWinnerEl.textContent =
            "💀 Computer Won The Match";

        toggleGameOver(true);
    }
}

function updateScores() {

    humanScoreEl.textContent =
        humanScore;

    computerScoreEl.textContent =
        computerScore;
}

function toggleGameOver(isOver) {

    choiceButtons.forEach(button => {
        button.disabled = isOver;
    });

    resetButton.style.display =
        isOver
            ? "inline-block"
            : "none";
}

function saveStats() {

    localStorage.setItem(
        "rpsStats",
        JSON.stringify(stats)
    );

    updateStatsDisplay();
}

function updateStatsDisplay() {

    winsEl.textContent =
        stats.wins;

    lossesEl.textContent =
        stats.losses;

    tiesEl.textContent =
        stats.ties;
}

function resetGame() {

    humanScore = 0;
    computerScore = 0;

    updateScores();

    roundResultEl.textContent =
        "Choose a weapon to start!";

    finalWinnerEl.textContent = "";

    toggleGameOver(false);
}

choiceButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            playRound(
                button.id,
                getComputerChoice()
            );
        }
    );
});

resetButton.addEventListener(
    "click",
    resetGame
);
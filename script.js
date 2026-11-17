function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock"
    if (randomNumber === 2) return "paper"
    else return "scissors"
}

function getHumanChoice(){
    const choice = prompt("Enter rock, paper or scissors");
    return choice.toLocaleLowerCase();
}

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice === ComputerChoice) {
        console.log(`Its a tie! Both chose ${HumanChoice} `);
        return "tie";
    }

const humanWins = 
(HumanChoice === "rock" && ComputerChoice === "scissors") ||
(HumanChoice === "paper" && ComputerChoice === "rock") ||
(HumanChoice === "scissors" && ComputerChoice === "paper");

if (humanWins) {
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}.`);
    return "human"
} else {
    console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}.`)
    return "computer"
}
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanSelection = getComputerChoice();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection);

        if (winner === "human") humanScore++;
        if (winner === "computer") computerScore++;
        
        console.log(`score -- You: ${humanScore} |  Computer: ${computerScore}`);
        }

        if (humanScore > computerScore) {
            console.log("Congratulation! You won the game!")
        } else if (computerScore > humanScore) {
            console.log("Game over! The Computer won.")
        } else {
            console.log("The 5-round game ended in a tie!")
        }
}

playGame()
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

if (humanwins) {
    console.log(`You win! ${HumanChoice} beats ${ComputerChoice}.`);
    return "human"
} else {
    console.log(`You lose! ${ComputerChoice} beats ${HumanChoice}.`)
    return "computer"
}

if
}


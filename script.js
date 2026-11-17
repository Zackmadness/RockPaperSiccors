function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "rock"
    if (randomNumber === 2) return "paper"
    else return "scissors"
}
function getComputerChoice() {

    let computerAnswer = Math.floor(Math.random() * 3 ) + 1;

    
    if (computerAnswer === 1)  {
        return "scissors";
    } else if (computerAnswer === 2) {
        return "rock";
    } else {
        return "paper";
    }
}

function getHumanChoice() {










//let humanChoice = prompt("Choose: Paper, Rock, or Scissors?");

return humanAnswer;
}



function playGame() {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let humanScore = 0;
        let computerScore = 0;

    
    function playRound(humanSelection, computerSelection) {

        if (humanSelection == "rock" && computerSelection == "scissors") {
            console.log("You win a round! Rock beats Paper!");
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            console.log("You win a round! Paper beats Rocks!");
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            console.log("You win a round! Scissors beats Paper!");
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "rock") {
            console.log("You lose a round! Rock beats Scissors!");
            computerScore++;
        } else if (humanSelection == "rock" && computerSelection == "paper") {
            console.log("You lose a round! Paper Beats Rock!");
            computerScore++;
        } else if (humanSelection == "paper" && computerSelection == "scissors") {
            console.log("You lose a round! Scissors beats Paper!");
            computerScore++;
        } else {
            console.log("Its a Tie!");
        }
    }

playRound(humanSelection, computerSelection);

console.log(`Final score is: User:${humanScore} and Computer:${computerScore}`);

}



playGame();
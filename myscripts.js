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

}

const containerTwo = document.querySelector('#container-two');
const button = document.querySelectorAll('button');
const paperButton = document.querySelector('#paperButton');
const rockButton = document.querySelector('#rockButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreboard = document.querySelector('#scoreboard');
const winnerAnnounced = document.querySelector('#winnerAnnounced');
const results = document.querySelector('#results');


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

    
function playRound(humanSelection, computerSelection) {

        if (humanSelection == "rock" && computerSelection == "scissors") {
            results.textContent = "You win a round! Rock beats Paper!";
            humanScore++;
        } else if (humanSelection == "paper" && computerSelection == "rock") {
            results.textContent = "You win a round! Paper beats Rocks!";
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "paper") {
            results.textContent = "You win a round! Scissors beats Paper!";
            humanScore++;
        } else if (humanSelection == "scissors" && computerSelection == "rock") {
            results.textContent = "You lose a round! Rock beats Scissors!";
            computerScore++;
        } else if (humanSelection == "rock" && computerSelection == "paper") {
            results.textContent = "You lose a round! Paper Beats Rock!";
            computerScore++;
        } else if (humanSelection == "paper" && computerSelection == "scissors") {
            results.textContent = "You lose a round! Scissors beats Paper!";
            computerScore++;
        } else {
            results.textContent = "Its a Tie!";
        }


    }


button.forEach(function(button) {
        button.addEventListener('click', () => {

            if(button.id === paperButton) {
                humanSelection = "paper";
            } else if(button.id === rockButton) {
                humanSelection = "rock";
            } else {
                humanSelection = "scissors";
            }
            
            playRound(`${humanSelection}`, getComputerChoice());
            
scoreboard.textContent = `Human Score: ${humanScore} Computer Score: ${computerScore}`;

if( humanScore == 5) {

    winnerAnnounced.textContent = "The Winner is the Humans! Suck it Skynet!";
    
    } else if( computerScore == 5) {
    
    winnerAnnounced.textContent = "The Winner is the Machines! Should have taken the blue pill!";
    
    }


});
});







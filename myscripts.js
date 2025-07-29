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

const containerTwo = document.querySelector('#container-two');
const button = document.querySelectorAll('button');
const paperButton = document.querySelector('#paperButton');
const rockButton = document.querySelector('#rockButton');
const scissorsButton = document.querySelector('#scissorsButton');
const scoreboard = document.querySelector('#scoreboard');
const winnerAnnounced = document.querySelector('#winnerAnnounced');
const results = document.querySelector('#results');


let humanSelection;
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


button.forEach((button) => {
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
            finalResult();
        })
    })


function finalResult () {

if( humanScore == 5) {

    winnerAnnounced.textContent = "The Winner is the Humans! Suck it Skynet!";
    disableButtons(true);
    reset();
    
    } else if( computerScore == 5) {
    
    winnerAnnounced.textContent = "The Winner is the Machines! Should have taken the blue pill!";
    disableButtons(true);
    reset();
    }


};


function disableButtons(state) {
        button.forEach(button => {
            button.disabled = state;
        })

}






function reset () {
        const resetBtn = document.createElement('button');
        resetBtn.classList.add('button-reset');
        resetBtn.textContent = "Play again";
        winnerAnnounced.appendChild(resetBtn);

        resetBtn.addEventListener('click', () => {
            humanScore = 0;
            computerScore = 0;
            winnerAnnounced.textContent = '';
            results.textContent = '';
            scoreboard.textContent = '';
            disableButtons(false);
            resetBtn.remove();
        })
}

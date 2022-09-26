function getComputerChoice() {

    const options = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * 3);

    let choice = options[index];

    return choice;

}

function playRound(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection.toLowerCase() == "rock") {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                outcome = "Both picked Rock. It's a Draw";
                break;
            case "paper":
                outcome = "You Lose! Paper beats Rock";
                break;
            case "scissors":
                outcome = "You Win! Rock beats Scissor";
                break;
        }
    }

    else if (playerSelection.toLowerCase() == "paper") {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                outcome = "You Win! Paper beats Rock";
                break;
            case "paper":
                outcome = "Both picked Paper. It's a Draw";
                break;
            case "scissors":
                outcome = "You Lose! Scissor beats Paper";
                break;
        }
    }

    else {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                outcome = "You Lose! Rock beats Scissors";
                break;
            case "paper":
                outcome = "You Win! Scissor beats Paper";
                break;
            case "scissors":
                outcome = "Both picked Scissor. It's a Draw";
                break;
        }
    }
    return outcome;

}

function game() {
    console.log("we started");
    startGame.disabled = true;
    let playerSelection;
    var outcome;
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.getElementById("player");
    const computerScoreDisplay = document.getElementById("computer");
    const result = document.getElementById("result");

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            playerSelection = e.target.id;
            outcome = playRound(playerSelection, getComputerChoice());
            result.textContent = outcome;

            if (outcome.includes("Win")) {
                playerScore++;
            }
            if (outcome.includes("Lose")) {
                computerScore++;
            }
            playerScoreDisplay.textContent = playerScore.toString();
            computerScoreDisplay.textContent = computerScore.toString();
            
            if (playerScore == 5 || computerScore == 5){            // When there is a winner
                
                buttons.forEach((button) => button.disabled = true)

                if (playerScore > computerScore) {
                    result.textContent = "Congratulations, you won!!";
                }
                else{
                    result.textContent = "Unlucky, you lost";
                }

            }
            
        });
    });
}

const startGame = document.getElementById("start");
startGame.addEventListener('click',game);

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
    let playerSelection;
    var outcome;
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDisplay = document.getElementById("player");
    const computerScoreDisplay = document.getElementById("computer");

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            playerSelection = e.target.id;
            console.log(playerSelection);
            outcome = playRound(playerSelection, getComputerChoice());
            console.log(outcome);

            if (outcome.includes("Win")) {
                playerScore++;
            }
            if (outcome.includes("Lose")) {
                computerScore++;
            }
            playerScoreDisplay.textContent = playerScore.toString();
            computerScoreDisplay.textContent = computerScore.toString();

            console.log("player: " + playerScore);
            console.log("computer: " + computerScore);
            
            
            if (playerScore == 5 || computerScore == 5){            // When there is a winner
                
                buttons.forEach((button) => button.disabled = true)

                if (playerScore > computerScore) {
                    console.log("Congratulations, you won!!");
                }
                else if (computerScore > playerScore) {
                    console.log("Unlucky, you lost");
                }
                else {
                    console.log("The game is a draw!");
                }

            }
            
        });
    });

    console.log(outcome);

    /* if (outcome.includes("Win")) {
        playerScore++;
    }
    if (outcome.includes("Lose")) {
        computerScore++;
    }


    if (playerScore > computerScore) {
        console.log("Congratulations, you won!!");
    }
    else if (computerScore > playerScore) {
        console.log("Unlucky, you lost");
    }
    else {
        console.log("The game is a draw!");
    } */
}

/* const buttons = document.querySelectorAll('button');
let playerSelection;
var outcome;

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        playerSelection = e.target.id;
        console.log(playerSelection);
        outcome = playRound(playerSelection, getComputerChoice());
        

    });
});
console.log(outcome); */


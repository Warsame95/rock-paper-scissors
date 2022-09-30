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

function playGame(e) {
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
    
    if (playerScore == 5 || computerScore == 5) {            // When there is a winner

        buttons.forEach((button) => button.disabled = true)
        startGame.disabled = false;
        startGame.addEventListener('click', reset);

        if (playerScore > computerScore) {
            result.textContent = "Congratulations, you won!!";
        }
        else {
            result.textContent = "Unlucky, you lost";
        }
    }
}

function game() {
    
    startGame.disabled = true;
    buttons.forEach((button) => button.disabled = false);
    buttons.forEach((button) => {
        button.addEventListener('click', playGame);
    });
}

function reset() {

    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    playerScore = 0;
    computerScore = 0;
    result.textContent = "";

    buttons.forEach((button) => button.disabled = false);
    startGame.disabled = true;

}

let playerSelection;
var outcome;
let playerScore = 0;
let computerScore = 0;

const startGame = document.getElementById("start");
startGame.addEventListener('click', game);

const playerScoreDisplay = document.getElementById("player");
const computerScoreDisplay = document.getElementById("computer");
const result = document.getElementById("result");

const buttons = document.querySelectorAll('div.button-container > button');
buttons.forEach((button) => button.disabled = true);
function getComputerChoice(){
    
    const options = ["Rock", "Paper", "Scissors"];

    let index = Math.floor(Math.random() * 3);

    let choice = options[index];

    return choice;

}
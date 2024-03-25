let playerSelection;
let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];



function getComputerChoice() {
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}

console.log(getComputerChoice());


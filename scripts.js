
let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];



function getComputerChoice() {
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}
let playerSelection = prompt("Round 1 - Rock, Paper, or Scissors? - 1...2...3 shoot!")


function playRound(capPlayerSelection, computerSelection) {
    if (capPlayerSelection === "Rock" && computerSelection === "Scissors") {
        alert("You win! Rock beats Scissors");
    } else if (capPlayerSelection === "Paper" && computerSelection === "Rock") {
        alert("You win! Paper beats Rock");
    } else if (capPlayerSelection === "Scissors" && computerSelection === "Paper") {
        alert("You win! Scissors beats Paper");
    } else if (capPlayerSelection === "Rock" && computerSelection === "Paper") {
        alert("You lose! Paper beats Rock");
    } else if (capPlayerSelection === "Paper" && computerSelection === "Scissors") {
        alert("You lose! Scissors beats Paper");
    } else if (capPlayerSelection === "Scissors" && computerSelection === "Rock") {
        alert("You lose! Rock beats Scissors");
    }  else {
        alert("It's a tie! Play another round");
    }
}
const lowPlayerSelection =  playerSelection.toLowerCase();
const capPlayerSelection = lowPlayerSelection.charAt(0).toUpperCase() + lowPlayerSelection.slice(1);
const computerSelection = getComputerChoice();
console.log(playRound(capPlayerSelection,computerSelection));
console.log(capPlayerSelection);
console.log(computerSelection);
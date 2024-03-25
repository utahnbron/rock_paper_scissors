
let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];



function getComputerChoice() {
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        alert("You win! Rock beats Scissors");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        alert("You win! Paper beats Rock");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        alert("You win! Scissors beats Paper");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        alert("You lose! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        alert("You lose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        alert("You lose! Rock beats Scissors");
    }  else {
        alert("It's a tie! Play another round");
    }
}
const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
console.log(playerSelection);
console.log(computerSelection);
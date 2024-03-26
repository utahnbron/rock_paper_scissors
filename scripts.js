let playerScore = 0;
let computerScore = 0;
let rounds = 0;


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
let result;

function playRound(capPlayerSelection, computerSelection) {
    if (capPlayerSelection === computerSelection) {
        return("It's a tie! Play another round")
    }
    else if (capPlayerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            result = "You win!";
            playerScore++;

        } else {
            result = "You lose!";
            computerScore++;

        }
    } 
        
        
    } else if (capPlayerSelection === "Paper" && computerSelection === "Rock") {
        return("You win! Paper beats Rock");
    } else if (capPlayerSelection === "Scissors" && computerSelection === "Paper") {
        return("You win! Scissors beats Paper");
    } else if (capPlayerSelection === "Rock" && computerSelection === "Paper") {
        return("You lose! Paper beats Rock");
    } else if (capPlayerSelection === "Paper" && computerSelection === "Scissors") {
        return("You lose! Scissors beats Paper");
    } else if (capPlayerSelection === "Scissors" && computerSelection === "Rock") {
        return("You lose! Rock beats Scissors");
    }  else {
        
    }   
}


const lowPlayerSelection =  playerSelection.toLowerCase();
const capPlayerSelection = lowPlayerSelection.charAt(0).toUpperCase() + lowPlayerSelection.slice(1);
const computerSelection = getComputerChoice();

console.log(playRound(capPlayerSelection,computerSelection));
console.log(capPlayerSelection);
console.log(computerSelection);
console.log(result1);
console.log(getScore1(result1));

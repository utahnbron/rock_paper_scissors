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
const lowPlayerSelection =  playerSelection.toLowerCase();
const capPlayerSelection = lowPlayerSelection.charAt(0).toUpperCase() + lowPlayerSelection.slice(1);
const computerSelection = getComputerChoice();

function playRound(capPlayerSelection, computerSelection) {
    if (capPlayerSelection === computerSelection) {
        result = ("It's a tie! Play another round")
    }
    else if (capPlayerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            result = "You win!";
            playerScore++;
            // consider scoreboard output here
        } else {
            result = "You lose!";
            computerScore++;
            // consider scoreboard output here
        }
    } 
    else if (capPlayerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            result = "You lose!";
            computerScore++;
            // consider scoreboard output here
        } else {
            result = "You win!";
            playerScore++;
            // consider scoreboard output here
        }
    }
    else if (capPlayerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            result = "You lose!";
            computerScore++;
            //consider scoreboard output here
        } else {
            result = "You win!";
            playerScore++;
            // consider scoreboard output here
        }
    }
}
console.log(result);
console.log(capPlayerSelection);
console.log(computerSelection);
console.log(computerScore);
console.log(playerScore);


// This is the initial 1 round code I used for step 4.
   // } else if (capPlayerSelection === "Paper" && computerSelection === "Rock") {
   //     return("You win! Paper beats Rock");
   // } else if (capPlayerSelection === "Scissors" && computerSelection === "Paper") {
   //     return("You win! Scissors beats Paper");
   // } else if (capPlayerSelection === "Rock" && computerSelection === "Paper") {
   //     return("You lose! Paper beats Rock");
   // } else if (capPlayerSelection === "Paper" && computerSelection === "Scissors") {
   //     return("You lose! Scissors beats Paper");
   // } else if (capPlayerSelection === "Scissors" && computerSelection === "Rock") {
   //     return("You lose! Rock beats Scissors");
   // }  else {
   //     
   // }   
// }




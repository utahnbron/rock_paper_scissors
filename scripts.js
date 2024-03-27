let myArray = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)];
    return computerSelection
}


function playGame(capPlayerSelection, computerSelection) {

 
    let playerScore = 0;
    let computerScore = 0;

    
    let playerSelection = prompt("Rock, Paper, or Scissors? - 1...2...3 shoot!")
    const lowPlayerSelection =  playerSelection.toLowerCase();
    const capPlayerSelection = lowPlayerSelection.charAt(0).toUpperCase() + lowPlayerSelection.slice(1);
    const computerSelection = getComputerChoice();

    function playRound(capPlayerSelection, computerSelection) {
        if (capPlayerSelection === "Rock" && computerSelection === "Scissors") {
            alert("You win! Rock beats Scissors");
        return playerScore++;
        } else if (capPlayerSelection === "Paper" && computerSelection === "Rock") {
            alert("You win! Paper beats Rock");
            return playerScore++;
        } else if (capPlayerSelection === "Scissors" && computerSelection === "Paper") {
            alert("You win! Scissors beats Paper");
            return playerScore++;
        } else if (capPlayerSelection === "Rock" && computerSelection === "Paper") {
            alert("You lose! Paper beats Rock");
            return computerScore++;
        } else if (capPlayerSelection === "Paper" && computerSelection === "Scissors") {
            alert("You lose! Scissors beats Paper");
            return computerScore++;
        } else if (capPlayerSelection === "Scissors" && computerSelection === "Rock") {
            alert("You lose! Rock beats Scissors");
            return computerScore++;
        }  else {
            alert("It's a tie! Play another round");
        }
        
    }
}

console.log(playGame);
// console.log(capPlayerSelection);
console.log(computerSelection);
console.log(playerScore);
console.log(computerScore);

console.log(playGame);
// console.log(capPlayerSelection);
console.log(computerSelection);
console.log(playerScore);
console.log(computerScore);
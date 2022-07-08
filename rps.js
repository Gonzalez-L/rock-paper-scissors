// Create a function called computerPlay() that will randomly return either 'Rock', 'Paper' or 'Scissors'

let computerSelection = computerPlay();

function computerPlay() {
    let computerMove = Math.floor(Math.random()*100)+1;
    if (computerMove < 33) {
        return 'rock';
    } else if (computerMove > 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(computerSelection);

//Take input from user

let playerSelection = prompt('Rock, Paper or Scissors?', '');
playerSelection = playerSelection.toLowerCase();

console.log(playerSelection);

// Write a function that plays a single round of Rock Paper Scissors, takes 2 parameters - playerSelection and computerSelection and *returns* the winner of the round

function playRound(playerSelection, computerSelection) {
    if (playerSelection === '') {
        return 'Error'
    } else if (playerSelection === computerSelection) {
        return 'You tie';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
        return `${playerSelection} beats ${computerSelection}, you win!`
    } else {
        return `${computerSelection} beats ${playerSelection}, you lose.`
    }
}

console.log(playRound(playerSelection, computerSelection));

// Write a function called game() that calls the playRound function, it should play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    for (let i = 0; i < 5; i++) {
        return playRound(playerSelection, computerSelection);
    } 
     
}

for (let b = 0; b < 5; b++) {
    console.log('test');
}
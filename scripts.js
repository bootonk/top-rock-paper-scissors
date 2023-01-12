//the computer will randomly pick between rock, paper, or scissors
//with prompt() the player will pick between rock, paper, or scissors (case insensitive)
//rock wins against scissors, scissors wins against paper, paper wins against rock
//message directed towards the player as winner or loser + played combination of rock/paper/scissors
//if a selections match, message a tie, no score change
//play and record results for 5 rounds (a game) and message results for final winner or loser at the end
//if the round ends as a tie, message a tie



function getComputerChoice() {
  let computerOptions = ['Rock', 'Paper', 'Scissors'];
  let randomSelection = Math.floor(Math.random() *3);
  let computerSelection = computerOptions[randomSelection];
  console.log(computerSelection);
  return computerSelection;
}

function getPlayerSelection() {
  let playerInput = window.prompt('Rock, Paper, Scissors. What\'s your pick?').toLowerCase();
  let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
  console.log(playerSelection);
  return playerSelection;
}

function checkRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock') {
    if (computerSelection === 'Rock') {
      window.alert('It\'s a tie! No winner this time');
      return 'tie';
    } else if (computerSelection === 'Paper') {
      window.alert('Better luck next time. Paper beats Rock!');
      return 'loss';
    } else if (computerSelection === 'Scissors') {
      window.alert('Rock beats Scissors! You win!');
      return 'win';
    }
  }
  if (playerSelection === 'Paper') {
    if (computerSelection === 'Rock') {
      window.alert('Paper beats Rock! You win!');
      return 'win';
    } else if (computerSelection === 'Paper') {
      window.alert('It\'s a tie! No winner this time');
      return 'tie';
    } else if (computerSelection === 'Scissors') {
      window.alert('Better luck next time. Scissors beats Paper!');
      return 'loss';
    }
  }
  if (playerSelection === 'Scissors') {
    if (computerSelection === 'Rock') {
      window.alert('Better luck next time. Rock beats Scissors!');
      return 'loss';
    } else if (computerSelection === 'Paper') {
      window.alert('Scissors beats Paper! You win!');
      return 'win';
    } else if (computerSelection === 'Scissors') {
      window.alert('It\'s a tie! No winner this time');
      return 'tie';
    }
  }
  return window.alert('Ah, ah, ah! Try again with Rock, Paper, or Scissors');
}

function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerChoice();
  return checkRound(playerSelection, computerSelection);
}

function playGame() {
  let playerRoundCount = 0;
  let computerRoundCount = 0;
  console.log('hi');
  for (let i = 0; i < 5; i++) {
    let result = playRound();
    if (result === 'win') {
      playerRoundCount += 1;
    } else if (result === 'loss') {
      computerRoundCount += 1;
    }
  }
  if (playerRoundCount > computerRoundCount) {
    window.alert('Winner winner chicken dinner!');
  } else if (playerRoundCount < computerRoundCount) {
    window.alert('The odds were not in your favour');
  }
}

playGame();
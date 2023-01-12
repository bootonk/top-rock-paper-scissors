//the computer will randomly pick between rock, paper, or scissors
//with prompt() the player will pick between rock, paper, or scissors (case insensitive)
//rock wins against scissors, scissors wins against paper, paper wins against rock
//message directed towards the player as winner or loser + played combination of rock/paper/scissors
//if a selections match, message a tie, no score change
//play and record results for 5 rounds (a game) and message results for final winner or loser at the end
//if the round ends as a tie, message a tie

getComputerChoice()
playRound(playerSelection, computerSelection)

//testing code for one round
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//the computer will randomly pick between rock, paper, or scissors
//with prompt() the player will pick between rock, paper, or scissors (case insensitive)
//rock wins against scissors, scissors wins against paper, paper wins against rock
//message directed towards the player as winner or loser + played combination of rock/paper/scissors
//if a selections match, message a tie, no score change
//play and record results for 5 rounds (a game) and message results for final winner or loser at the end
//if the round ends as a tie, message a tie



// function getComputerChoice() {
//   let computerOptions = ['Rock', 'Paper', 'Scissors'];
//   let randomSelection = Math.floor(Math.random() *3);
//   let computerSelection = computerOptions[randomSelection];
//   console.log(computerSelection);
//   return computerSelection;
// }

// // function getPlayerSelection() {
// //   let playerInput = window.prompt('Rock, Paper, Scissors. What\'s your pick?').toLowerCase();
// //   let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
// //   console.log(playerSelection);
// //   return playerSelection;
// // }

// function getPlayerSelection() {
//   const rock = document.querySelector('.rock');
//   const paper = document.querySelector('.paper')
//   const scissors = document.querySelector('.scissors')
//   rock.addEventListener('click', () => checkRound('Rock'));
//   paper.addEventListener('click', () => checkRound('Paper'));
//   scissors.addEventListener('click', () => checkRound('Scissors'));
// }

// function checkRound(playerSelection) {   
//   let computerSelection = getComputerChoice();
//   const options = document.querySelector('#options');
//   const msg = document.createElement('div');
//   // msg.classList.add('msg');
//   if (playerSelection === 'Rock') {
//     if (computerSelection === 'Rock') {
//       msg.textContent = 'It\'s a tie! No winner this time';
//       options.appendChild(msg);
//       // console.log('tie')
//       // window.alert('It\'s a tie! No winner this time');
//     } else if (computerSelection === 'Paper') {
//       msg.textContent = 'Better luck next time. Paper beats Rock!';
//       options.appendChild(msg);
//       // window.alert('Better luck next time. Paper beats Rock!');
//       window.loss++;
//     } else if (computerSelection === 'Scissors') {
//       msg.textContent = 'Rock beats Scissors! You win!';
//       options.appendChild(msg);
//       // window.alert('Rock beats Scissors! You win!');
//       window.win++;
//     }
//   }
//   if (playerSelection === 'Paper') {
//     if (computerSelection === 'Rock') {
//       msg.textContent = 'Paper beats Rock! You win!';
//       options.appendChild(msg);
//       // window.alert('Paper beats Rock! You win!');
//       window.win++;
//     } else if (computerSelection === 'Paper') {
//       msg.textContent = 'It\'s a tie! No winner this time';
//       options.appendChild(msg);
//       // window.alert('It\'s a tie! No winner this time');
//     } else if (computerSelection === 'Scissors') {
//       msg.textContent = 'Better luck next time. Scissors beats Paper!';
//       options.appendChild(msg);
//       // window.alert('Better luck next time. Scissors beats Paper!');
//       window.loss++;
//     }
//   }
//   if (playerSelection === 'Scissors') {
//     if (computerSelection === 'Rock') {
//       msg.textContent = 'Better luck next time. Rock beats Scissors!';
//       options.appendChild(msg);
//       // window.alert('Better luck next time. Rock beats Scissors!');
//       window.loss++;
//     } else if (computerSelection === 'Paper') {
//       msg.textContent = 'Scissors beats Paper! You win!';
//       options.appendChild(msg);
//       // window.alert('Scissors beats Paper! You win!');
//       window.win++;
//     } else if (computerSelection === 'Scissors') {
//       msg.textContent = 'It\'s a tie! No winner this time';
//       options.appendChild(msg);
//       // window.alert('It\'s a tie! No winner this time');
//     }
//   }
//   playRound();

//   // return window.alert('Ah, ah, ah! Try again with Rock, Paper, or Scissors');
// }

// function playRound() {
//   // let playerSelection = getPlayerSelection();
//   // let computerSelection = getComputerChoice();
//   // if (window.round <=5) {
//   //   getPlayerSelection();
//   // } else {
//     console.log(window.rounds)
//     if (window.rounds >5 ) {
//       if (window.win > window.loss) {
//         window.alert('Winner winner chicken dinner!');
//       } else if (window.win < window.loss) {
//         window.alert('The odds were not in your favour');
//       }
//     } else {
//       window.rounds++;
//       getPlayerSelection();
//     }
//   }

// // function playGame() {
// //   playRound();
//   // let playerRoundCount = 0;
//   // // console.log(playerRoundCount);
//   // let computerRoundCount = 0;
//   // // console.log(computerRoundCount);
//   // // console.log('hi');
//   // for (let i = 0; i < 5; i++) {
//   //   let result = playRound();
//   //   if (result === 'win') {
//   //     playerRoundCount += 1;
//   //     // console.log(playerRoundCount);
//   //   } else if (result === 'loss') {
//   //     computerRoundCount += 1;
//   //     // console.log(computerRoundCount);
//   //   }
//   // }
// //   if (window.win > window.loss) {
// //     window.alert('Winner winner chicken dinner!');
// //   } else if (window.win < window.loss) {
// //     window.alert('The odds were not in your favour');
// //   }
// // }

// window.rounds = 0;
// window.win = 0;
// window.loss = 0;
// playRound();

// window.addEventListener('click', function(e) {
//   const selection = document.querySelector('button.class');
//   // const selectionPaper = document.querySelector('.paper');
//   // const selectionScissors = document.querySelector('.scissors');

//   console.log(selection);
// })

// function getPlayerSelection(playerSelection) {
//   console.log(playerSelection);
// }


function getComputerChoice() {
  let computerOptions = ['Rock', 'Paper', 'Scissors'];
  let randomSelection = Math.floor(Math.random() *3);
  let computerSelection = computerOptions[randomSelection];
  return computerSelection;
}

function checkRound(playerSelection) {   
    let computerSelection = getComputerChoice();
    // const options = document.querySelector('#options');
    // const msg = document.createElement('div');
    // msg.classList.add('msg');
    if (playerSelection === 'Rock') {
      if (computerSelection === 'Rock') {
        msg.textContent = 'It\'s a tie! No winner this time';
        options.appendChild(msg);
        // console.log('tie')
        // window.alert('It\'s a tie! No winner this time');
        window.rounds++;
      } else if (computerSelection === 'Paper') {
        msg.textContent = 'Better luck next time. Paper beats Rock!';
        options.appendChild(msg);
        // window.alert('Better luck next time. Paper beats Rock!');
        window.loss++;
        window.rounds++;
      } else if (computerSelection === 'Scissors') {
        msg.textContent = 'Rock beats Scissors! You win!';
        options.appendChild(msg);
        // window.alert('Rock beats Scissors! You win!');
        window.win++;
        window.rounds++;
      }
    }
    if (playerSelection === 'Paper') {
      if (computerSelection === 'Rock') {
        msg.textContent = 'Paper beats Rock! You win!';
        options.appendChild(msg);
        // window.alert('Paper beats Rock! You win!');
        window.win++;
        window.rounds++;
      } else if (computerSelection === 'Paper') {
        msg.textContent = 'It\'s a tie! No winner this time';
        options.appendChild(msg);
        // window.alert('It\'s a tie! No winner this time');
        window.rounds++;
      } else if (computerSelection === 'Scissors') {
        msg.textContent = 'Better luck next time. Scissors beats Paper!';
        options.appendChild(msg);
        // window.alert('Better luck next time. Scissors beats Paper!');
        window.loss++;
        window.rounds++;
      }
    }
    if (playerSelection === 'Scissors') {
      if (computerSelection === 'Rock') {
        msg.textContent = 'Better luck next time. Rock beats Scissors!';
        options.appendChild(msg);
        // window.alert('Better luck next time. Rock beats Scissors!');
        window.loss++;
        window.rounds++;
      } else if (computerSelection === 'Paper') {
        msg.textContent = 'Scissors beats Paper! You win!';
        options.appendChild(msg);
        // window.alert('Scissors beats Paper! You win!');
        window.win++;
        window.rounds++;
      } else if (computerSelection === 'Scissors') {
        msg.textContent = 'It\'s a tie! No winner this time';
        options.appendChild(msg);
        // window.alert('It\'s a tie! No winner this time');
        window.rounds++;
      }
    }
    countRound();
    count.textContent = `You: ${window.win} vs Computer: ${window.loss}`;
    options.appendChild(count);
  }

  const options = document.querySelector('#options');
  const count = document.createElement('div');
  const msg = document.createElement('div');
  msg.classList.add('msg');
  window.rounds = 0;
  window.win = 0;
  window.loss = 0;

function countRound() {
  console.log(window.rounds);
  const winnerMsg = document.createElement('div');
  if (window.rounds === 5) {
    // console.log(window.win);
    // console.log(window.loss);
    options.removeChild(msg);
    if (window.win > window.loss) {
      console.log('winner');
      winnerMsg.textContent = 'You\'ve done it! You\'ve won!' 
      options.appendChild(winnerMsg);
    } else if (window.win < window.loss) {
      console.log('loser');
      winnerMsg.textContent = 'Today isn\'t your day, pal! You lost.'
      options.appendChild(winnerMsg);
    }
    window.rounds = 0;
    window.win = 0;
    window.loss = 0;
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', function() {
    checkRound(button.id);
  });
});


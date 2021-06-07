// I. Preliminaries
  let userMove = "";
  let computerMove = "";
  let roundWinner = "";
  let resultsDiv = document.getElementById('results-message');
  let roundResults = document.getElementById('round-results');
  let gameResults = document.getElementById('game-results');
  let userWins = "0";
  let computerWins = "0";
  let neitherWins = "0";
  let userRecord = (userWins + "-" + computerWins + "-" + neitherWins + ".");
  
  function write(string3) {
    let text = document.createTextNode(string3);
    let h4 = document.createElement('h4');
    h4.appendChild(text);
    return h4;
  }

  function resetTally() {
    if ( userWins === 5 || computerWins === 5 ) {
    userWins = 0;
    computerWins = 0;
    neitherWins = 0;
    gameResults.replaceChild(write(""), gameResults.childNodes[0]);
    }
    return;
  }


// III. Initialize a function, which will generate a move for the computer:
function randomMove() {
  computerMove = Math.random();
    if ( computerMove >= 0 && computerMove < 0.33) {
      computerMove = "Rock";
    }
    else if ( computerMove >= 0.33 && computerMove <= 0.66 ) {
      computerMove = "Paper";
    }
    else {
      computerMove = "Scissors";
    }
  return computerMove;
}

// IV. Initialize a function to determine the winner of one round
function playRound(playerSelection, computerSelection) {
  switch(true) {
    case ( playerSelection === "Rock" && computerSelection === "Rock") : roundWinner = "Neither";
    break;
    case ( playerSelection === "Rock" && computerSelection === "Paper") : roundWinner = "Computer";
    break;
    case ( playerSelection === "Rock" && computerSelection === "Scissors") : roundWinner = "User";
    break;
    case ( playerSelection === "Paper" && computerSelection === "Rock") : roundWinner = "User";
    break;
    case ( playerSelection === "Paper" && computerSelection === "Paper") : roundWinner = "Neither";
    break;
    case ( playerSelection === "Paper" && computerSelection === "Scissors") : roundWinner = "Computer";
    break;
    case ( playerSelection === "Scissors" && computerSelection === "Rock") : roundWinner = "Computer";
    break;
    case ( playerSelection === "Scissors" && computerSelection === "Paper") : roundWinner = "User";
    break;
    case ( playerSelection === "Scissors" && computerSelection === "Scissors") : roundWinner = "Neither";
    break;
  }
  return roundWinner;
}

// V. Initialize function to announce a winner
function announceRoundWinner(winner) {
  let win = "You win! Your " + userMove + " beats " + computerMove + "." ;
  let lose = "You lose! " + computerMove + " beats your " + userMove + "." ;
  let tie = "We tie! We both played " + userMove + ". Let's play again!" ;
  
  if ( winner === "User" ) {
    roundResults.innerText = win;
  } 
  else if ( winner === "Computer" ) {
    roundResults.innerText = lose;
  }
  else if ( winner === "Neither" ) {
    roundResults.innerText = tie;
  }
  return;
}

// Initialize a function to update the record of the series
function updateGameRecord(winner) {
    if (winner === "User") {
      userWins++;
    } else if (winner === "Computer") {
      computerWins++;
    } else if (winner === "Neither") {
      neitherWins++;
    }
    let runningTally = write( `Your record is ${userWins}-${computerWins}-${neitherWins}. Make your next move.` )
    gameResults.replaceChild(runningTally, gameResults.childNodes[0]);
    userRecord = (userWins + "-" + computerWins + "-" + neitherWins + ".");
  
  if (userWins === 5) {
    let gameWin = "Congratulations! You have won this game with a record of " + userRecord ;
    gameResults.replaceChild( write(gameWin), gameResults.childNodes[0] );
  } else if (computerWins === 5) {
    let gameLose = "Oh no! You lost this game with a record of " + userRecord ;
    gameResults.replaceChild( write(gameLose), gameResults.childNodes[0] );
  }
  
  return;
}

// VI. Initialize a function to initiate round combining above functions
function rockPaperScissors(string2) {
  resetTally();
  userMove = string2;
  computerMove = randomMove();
  playRound(userMove, computerMove);
  announceRoundWinner(roundWinner)
  updateGameRecord(roundWinner);

  return;
}




// VIII. Add event listeners to buttons
let rockButton = document.getElementById('btn-rock');
rockButton.addEventListener( 'click', () => rockPaperScissors('Rock') );
let paperButton = document.getElementById('btn-paper');
paperButton.addEventListener( 'click', () => rockPaperScissors('Paper') );
let scissorsButton = document.getElementById('btn-scissors');
scissorsButton.addEventListener( 'click', () => rockPaperScissors('Scissors') );


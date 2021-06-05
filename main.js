// I. Preliminaries
  let userMove = "";
  let computerMove = "";
  let roundWinner = "";
  let messageDiv = document.getElementById('message');
  function capitalize(string1) {
    let firstChar = string1.slice(0,1);
    firstChar = firstChar.toUpperCase();
    string1 = string1.toLowerCase();
    string1 = string1.substring(1);
    string1 = firstChar + string1;    
    return string1;
  }
  console.log("Welcome to Rock, Paper, Scissors!")


// II. Initialize a function to test if user's move is permitted
function testMove(move) {
  
  function checkMove(move) {
    if ( !(move === "Rock" || move === "Paper" || move === "Scissors") ) {
      console.log("That's not a move!\nPlease choose from Rock, Paper, and Scissors.");
      messageDiv.innerText = "That's not a move!\nPlease choose from Rock, Paper, and Scissors.";
    }
    return
  }

  capitalizedMove = capitalize(move);
  checkMove(capitalizedMove);
  return userMove = capitalizedMove;
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
function announceWinner(winner) {
  if ( winner === "User" ) {
    console.log( "You win! Your " + userMove + " beats " + computerMove + "." );
    messageDiv.innerText = "You win! Your " + userMove + " beats " + computerMove + "." ;
  } 
  else if ( winner === "Computer" ) {
    console.log( "You lose! " + computerMove + " beats your " + userMove + "." );
    messageDiv.innerText = "You lose! " + computerMove + " beats your " + userMove + "." ;
  }
  else if ( winner === "Neither" ) {
    console.log( "We tie! We both played " + userMove + ". Let's play again!" );
    messageDiv.innerText = "We tie! We both played " + userMove + ". Let's play again!" ;
  }
  return;
}

// VI. Initialize a function to initiate round combining above functions
function rockPaperScissors(string2) {
  userMove = string2;
  testMove(userMove);
  computerMove = randomMove();
  playRound(userMove, computerMove);
  announceWinner(roundWinner)
  return;
}

// VII. Initialize function to begin a best-of-five game
function game() {
  let userWins = "0";
  let computerWins = "0";
  let neitherWins = "0";
  let userRecord = (userWins + "-" + computerWins + "-" + neitherWins + ".");
  while ( userWins < 3 && computerWins < 3 ) {
    userMove = prompt("Rock...\n Paper...\n  Scissors...\n   Shoot\:");
    rockPaperScissors(userMove);
    if (roundWinner === "User") {
      userWins++;
    } else if (roundWinner === "Computer") {
      computerWins++;
    } else if (roundWinner === "Neither") {
      neitherWins++;
    }
    console.log( "You have " + userWins + " wins, and " + computerWins + " losses. You have tied " + neitherWins + " times." );
    alert( "You have " + userWins + " wins, and " + computerWins + " losses. You have tied " + neitherWins + " times.\nPress OK for the next round.");
    userRecord = (userWins + "-" + computerWins + "-" + neitherWins + ".");
  }
  if (userWins === 3) {
    alert( "Congratulations! You have won this best-of-five game with a record of " + userRecord )
  } else if (computerWins === 3) {
    alert("Oh no! You lost this best-of-five game with a record of " + userRecord);
  }
  return;
}

// VII. Prompt user to make a move
console.log( "Choose your move with the function rockPaperScissors" );
messageDiv.innerText = 'Choose your move with the buttons above'
console.log( "Or, with the command 'game()' we can play a best-of-five game, if you dare!" );


// VIII. Add event listeners to buttons
let rockButton = document.getElementById('btn-rock');
rockButton.addEventListener( 'click', () => rockPaperScissors('rock') );
let paperButton = document.getElementById('btn-paper');
paperButton.addEventListener( 'click', () => rockPaperScissors('paper') );
let scissorsButton = document.getElementById('btn-scissors');
scissorsButton.addEventListener( 'click', () => rockPaperScissors('scissors') );


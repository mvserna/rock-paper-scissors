// I. Preliminaries
  // I.A. Declare a variable for the user's move
  let userMove = "";
  // I.B. Declare a variable for the computer's move
  let computerMove = "";
  // I.C. Declare a variable for the winner of a round
  let roundWinner = "";
  // I.D. Initialize a capitalization function with one parameter
  function capitalize(string1) {
    // I.D.1. Slice the first character of parameter and assign to firstChar
    let firstChar = string1.slice(0,1);
    // I.D.2. Set that firstChar to upper case
    firstChar = firstChar.toUpperCase();
    // I.D.3. Set parameter to lower case, and update parameter
    string1 = string1.toLowerCase();
    // I.D.4. Update parameter to exclude first letter
    string1 = string1.substring(1);
    // I.D.5. Concatenate the substring with firstChar
    string1 = firstChar + string1;    
    // I.D.6. Return the updated parameter
    return string1;
  }
  // I.G. Welcome message
  console.log("Welcome to Rock, Paper, Scissors!")


// II. Initialize a function to test if user's move is permitted
function testMove(move) {
  // II.A. Initialize function to test that user's move is a valid option
  function checkMove(move) {
    // II.A.1. If user move isn't Rock, Paper, or Scissors
    if ( !(move === "Rock" || move === "Paper" || move === "Scissors") ) {
      // II.A.2 Then run error message and prompt again
      console.log("That's not a move!\nPlease choose from Rock, Paper, and Scissors.");
      alert("That's not a move!\nPlease choose from Rock, Paper, and Scissors.");
    }
    // II.A.3 Take no action
    return
  }

  // II.B. Call the capitalize function with argument
  capitalizedMove = capitalize(move);
  // II.C. Call the function to test
  checkMove(capitalizedMove);
  // II.D. Update user's move with capitalized and tested string
  return userMove = capitalizedMove;
}

// III. Initialize a function, which will generate a move for the computer:
function randomMove() {
  // III.A. Assign a random number to the computer move variable
  computerMove = Math.random();
    // If the variable is between 0 and 0.33, return Rock
    if ( computerMove >= 0 && computerMove < 0.33) {
      computerMove = "Rock";
    }
    // Else If the variable is between 0.33 and 0.66, return Paper
    else if ( computerMove >= 0.33 && computerMove <= 0.66 ) {
      computerMove = "Paper";
    }
    // Else the variable is greater than 0.66, return Scissors
    else {
      computerMove = "Scissors";
    }
  // III.B.
  return computerMove;
}

// IV. Initialize a function to determine the winner of one round
function playRound(playerSelection, computerSelection) {
  // IV.A. Using a swtich statement determine winner:
  switch(true) {
    // IV.A.1.1     If user has Rock and computer has Rock, assign neither to winner variable
    case ( playerSelection === "Rock" && computerSelection === "Rock") : roundWinner = "Neither";
    break;
    // IV.A.1.2.    If user has Rock and computer has Paper, assign computer to winner variable
    case ( playerSelection === "Rock" && computerSelection === "Paper") : roundWinner = "Computer";
    break;
    // IV.A.1.3.    If user has Rock and computer has Scissors, assign user to winner variable
    case ( playerSelection === "Rock" && computerSelection === "Scissors") : roundWinner = "User";
    break;
    // IV.A.2.1.    If user has Paper and computer has Rock, assign user to winner variable
    case ( playerSelection === "Paper" && computerSelection === "Rock") : roundWinner = "User";
    break;
    // IV.A.2.2.    If user has Paper and computer has Paper, assign neither to winner variable
    case ( playerSelection === "Paper" && computerSelection === "Paper") : roundWinner = "Neither";
    break;
    // IV.A.2.3.    If user has Paper and computer has Scissors, assign computer to winner variable
    case ( playerSelection === "Paper" && computerSelection === "Scissors") : roundWinner = "Computer";
    break;
    // IV.A.3.1.    If user has Scissors and computer has Rock, assign computer to winner variable
    case ( playerSelection === "Scissors" && computerSelection === "Rock") : roundWinner = "Computer";
    break;
    // IV.A.3.2.    If user has Scissors and computer has Paper, assign user to winner variable
    case ( playerSelection === "Scissors" && computerSelection === "Paper") : roundWinner = "User";
    break;
    // IV.A.3.3.    If user has Scissors and computer has Scissors, assign user to winner variable
    case ( playerSelection === "Scissors" && computerSelection === "Scissors") : roundWinner = "Neither";
    break;
  }
  // IV.B. Return winner
  return roundWinner;
}

// V. Initialize function to announce a winner
function announceWinner(winner) {
  // V.A.1. If winner variable is user
  if ( winner === "User" ) {
    // V.A.2. Log "You win! " + user move + " beats " + computer move.
    console.log( "You win! Your " + userMove + " beats " + computerMove + "." );
    alert( "You win! Your " + userMove + " beats " + computerMove + "." );
  } 
  // V.B.1. If winner variable is computer
  else if ( winner === "Computer" ) {
    // V.B.2.  Log "You lose! " + computer move + " beats " + user move.
    console.log( "You lose! " + computerMove + " beats your " + userMove + "." );
    alert( "You lose! " + computerMove + " beats your " + userMove + "." );
  }
  // V.C.1. If winner variable is neither
  else if ( winner === "Neither" ) {
    // V.C.2. Log "You tie with " + user move + " and " + computer move. "Let's play again..."
    console.log( "We tie! Your " + userMove + " ties " + computerMove + ". Let's play again!" );
    alert( "We tie! Your " + userMove + " ties " + computerMove + ". Let's play again!" );
  }
  // V.D. Else take no action
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
console.log( "Or, with the command 'game()' we can play a best-of-five game, if you dare!" );


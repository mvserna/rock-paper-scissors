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


// II. Get a move from the user
  // II.A. Initialize a function to test if user's move is permitted
  function testMove(move) {
    // II.C.1. Call the capitalize function with argument
    capitalizedMove = capitalize(move);
    // II.C.2. If user move isn't Rock, Paper, or Scissors, run error message and prompt again
    function checkMove(move) {
      if ( !(move === "Rock" || move === "Paper" || move === "Scissors") ) {
        console.log("That's not a move!");
        console.log("Please choose from Rock, Paper, and Scissors.");
      }
      return
    }
    checkMove(capitalizedMove);
    // II.D. Update user's move with capitalized string
    return userMove = capitalizedMove;
  }

  // II.B. Initialize a function to initiate round
  function rockPaperScissors(string2) {
   
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
        // IV.B.1.1     If user has Rock and computer has Rock, assign neither to winner variable
        case ( playerSelection === "Rock" && computerSelection === "Rock") : roundWinner = "Neither";
        break;
        // IV.B.1.2.    If user has Rock and computer has Paper, assign computer to winner variable
        case ( playerSelection === "Rock" && computerSelection === "Paper") : roundWinner = "Computer";
        break;
        // IV.B.1.3.    If user has Rock and computer has Scissors, assign user to winner variable
        case ( playerSelection === "Rock" && computerSelection === "Scissors") : roundWinner = "User";
        break;
        // IV.B.2.1.    If user has Paper and computer has Rock, assign user to winner variable
        case ( playerSelection === "Paper" && computerSelection === "Rock") : roundWinner = "User";
        break;
        // IV.B.2.2.    If user has Paper and computer has Paper, assign neither to winner variable
        case ( playerSelection === "Paper" && computerSelection === "Paper") : roundWinner = "Neither";
        break;
        // IV.B.2.3.    If user has Paper and computer has Scissors, assign computer to winner variable
        case ( playerSelection === "Paper" && computerSelection === "Scissors") : roundWinner = "Computer";
        break;
        // IV.B.3.1.    If user has Scissors and computer has Rock, assign computer to winner variable
        case ( playerSelection === "Scissors" && computerSelection === "Rock") : roundWinner = "Computer";
        break;
        // IV.B.3.2.    If user has Scissors and computer has Paper, assign user to winner variable
        case ( playerSelection === "Scissors" && computerSelection === "Paper") : roundWinner = "User";
        break;
        // IV.B.3.3.    If user has Scissors and computer has Scissors, assign user to winner variable
        case ( playerSelection === "Scissors" && computerSelection === "Scissors") : roundWinner = "Neither";
        break;
      }
      // IV.C. Return winner
      return roundWinner;
    }

    userMove = string2;
    testMove(userMove);
    computerMove = randomMove();
    playRound(userMove, computerMove);
    announceWinner(roundWinner)
    return;
  }

  // II.C. Prompt user to make a move
  console.log("Choose your move with the function rockPaperScissors")




// V. Initialize function to announce a winner
function announceWinner(winner) {
  // V.A.1. If winner variable is user
  if ( winner === "User" ) {
    // V.A.2. Log "You win! " + user move + " beats " + computer move.
    console.log( "You win! " + userMove + " beats " + computerMove + "." );
  } 
  // V.B.1. If winner variable is computer
  else if ( winner === "Computer" ) {
    // V.B.2.  Log "You lose! " + computer move + " beats " + user move.
    console.log( "You lose! " + computerMove + " beats " + userMove + "." )
  }
  // V.C.1. If winner variable is neither
  else {
    // V.C.2. Log "You tie with " + user move + " and " + computer move. "Let's play again..."
    console.log( "We tie! " + userMove + " ties " + computerMove + ". Let's try again!" )
  }
  return;
}

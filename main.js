// I. Preliminaries
  // I.A. Declare a variable for the user's move
  let userMove = "";
  
  // I.B. Declare a variable for the computer's move
  let computerMove = "";
  
  // I.C. Declare a variable for the winner
  let roundWinner = "";
  
  // I.D. Initialize the capitalize function with one parameter
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

  // Prompt user to make a move
  console.log("Choose your move with the function rockPaperScissors")
  function rockPaperScissors(string2) {
    userMove = string2;
    testMove(userMove);
    return userMove;
  }
  
  // II.C. Initialize a function to test the variable
  function testMove(move) {
    // II.C.1. Call the capitalize function with argument
    capitalizedMove = capitalize(move);
    // II.C.2. If user move isn't Rock, Paper, or Scissors, run error message and prompt again
    function checkMove(move) {
      if (move !== ( "Rock" || "Paper" || "Scissor")) {
        console.log("That's not a move!");
        console.log("Please choose from Rock, Paper, and Scissors.");
      }
      return
    }
    checkMove(capitalizedMove);
    // II.D. Update user's move with capitalized string
    return userMove = capitalizedMove;
  }


// III. Have the computer make a random move
  // Call a function, which will generate a move:
    // Assign a random number to the computer move variable
    // If the variable is between 0 and 0.33, return Rock
    // Else If the variable is between 0.33 and 0.66, return Paper
    // Else the variable is between 0.66, return Scissors
  // Assign the string to the computer's move variable

// IV. Determine the winner
function playRound(playerSelection, computerSelection) {
  // IV.A. Call a function to determine the winner, using a swtich statement:
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
    // IV.B.2.1.    If user has Paper and computer has Rock, assign user to winner variable
    case ( playerSelection === "Paper" && computerSelection === "Rock") : roundWinner = "User";
    break;
    // IV.B.2.2.    If user has Paper and computer has Paper, assign neither to winner variable
    case ( playerSelection === "Paper" && computerSelection === "Paper") : roundWinner = "Neither";
    break;
    // IV.B.2.3.    If user has Paper and computer has Scissors, assign computer to winner variable
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
playRound(userMove, computerMove);

// V. Announce a winner
  // V.A.1. If winner variable is user
    // V.A.2. Log "You win! " + user move + " beats " + computer move.
  // V.B.1. If winner variable is computer
    // V.B.2.  Log "You lose! " + computer move + " beats " + user move.
  // V.C.1. If winner variable is neither
    // V.C.2. Log "You tie with " + user move + " and " + computer move. "Let's play again..."
  

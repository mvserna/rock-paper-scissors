// I. Preliminaries
  // I.A. Declare a variable for the user's move
  let userMove = "";
  // I.B. Declare a variable for the computer's move
  let computerMove = "";
  // I.C. Declare a variable for the winner
  let winner = "";
  // I.D. Initialize the capitalize function with one parameter
  function capitalize(x) {
    // I.D.1. Slice the first character of parameter and assign to firstChar
    firstChar = x.slice(0,1);
    // I.D.2. Set that firstChar to upper case
    firstChar = firstChar.toUpperCase();
    // I.D.3. Set parameter to lower case, and update parameter
    x = x.toLowerCase();
    // I.D.4. Update parameter to exclude first letter
    x = x.substring(1);
    // I.D.5. Concatenate the substring with firstChar
    x = firstChar + x;    
    // I.D.6. Return the updated parameter
    return x;
  }
  
// II. Get a move from the user
  // Prompt user to make a move
  // Assign user move to the variable
  // Call a function to parse the variable, which will
    // Call the capitalize function with argument user move
    // If user move is Rock, Paper, or Scissors, return
      // Else run error message, "That's not a move!" and return to prompt.
  // Update user's move with string

// III. Have the computer make a random move
  // Call a function, which will generate a move:
    // Assign a random number to the computer move variable
    // If the variable is between 0 and 0.33, return Rock
    // Else If the variable is between 0.33 and 0.66, return Paper
    // Else the variable is between 0.66, return Scissors
  // Assign the string to the computer's move variable

// IV. Determine the winner
  // IV.A. Call a function to determine the winner, using a swtich statement:
    // IV.A.1.1     If user has Rock and computer has Rock, assign neither to winner variable
    // IV.A.1.2.    If user has Rock and computer has Paper, assign computer to winner variable
    // IV.A.1.3.    If user has Rock and computer has Scissors, assign user to winner variable    
    // IV.B.2.1.    If user has Paper and computer has Rock, assign user to winner variable
    // IV.B.2.2.    If user has Paper and computer has Paper, assign neither to winner variable
    // IV.B.2.3.    If user has Paper and computer has Scissors, assign computer to winner variable
    // IV.A.3.1.    If user has Scissors and computer has Rock, assign computer to winner variable
    // IV.A.3.2.    If user has Scissors and computer has Paper, assign user to winner variable
    // IV.A.3.3.    If user has Scissors and computer has Scissors, assign user to winner variable
  // IV.B. Return

// V. Announce a winner
  // V.A.1. If winner variable is user
    // V.A.2. Log "You win! " + user move + " beats " + computer move.
  // V.B.1. If winner variable is computer
    // V.B.2.  Log "You lose! " + computer move + " beats " + user move.
  // V.C.1. If winner variable is neither
    // V.C.2. Log "You tie with " + user move + " and " + computer move. "Let's play again..."
  

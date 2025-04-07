const word = "honeydew"; // The word to guess
let displayWord = Array(word.length).fill("_"); // Word display array
let wrongGuesses = [];
let attemptsLeft = 4;

// Function to update the word display and status
function updateGameDisplay() {
  document.getElementById("word-display").textContent = displayWord.join(" ");
  document.getElementById("wrong-guesses").textContent =
    wrongGuesses.join(", ");
  document.getElementById("attempts-left").textContent = attemptsLeft;
}

// Function to handle the guessing of a letter
function guessLetter() {
  const letterInput = document.getElementById("letter-input");
  const letter = letterInput.value.toLowerCase();
  letterInput.value = ""; // Clear the input field

  if (
    letter &&
    !wrongGuesses.includes(letter) &&
    !displayWord.includes(letter)
  ) {
    if (word.includes(letter)) {
      // Update displayWord if the guess is correct
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          displayWord[i] = letter;
        }
      }
    } else {
      // If the guess is wrong
      wrongGuesses.push(letter);
      attemptsLeft--;
    }

    updateGameDisplay();

    if (attemptsLeft === 0) {
      alert("Game Over! The word was: " + word);
      resetGame();
    } else if (!displayWord.includes("_")) {
      alert("You Win! The word was: " + word);
      resetGame();
    }
  }
}

// Function to reset the game
function resetGame() {
  displayWord = Array(word.length).fill("_");
  wrongGuesses = [];
  attemptsLeft = 6;
  updateGameDisplay();
}
// Initialize the game display
updateGameDisplay();

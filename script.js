const wordList = [
  "honeydew",
  "mango",
  "pineapple",
  "strawberry",
  "apple",
  "banana",
  "grape",
  "kiwi",
];
let word = getRandomWord();
let displayWord = Array(word.length).fill("_");
let wrongGuesses = [];
let attemptsLeft = 6;

// Pick a random word from the list
function getRandomWord() {
  const index = Math.floor(Math.random() * wordList.length);
  return wordList[index];
}

// Update the word display and status
function updateGameDisplay() {
  document.getElementById("word-display").textContent = displayWord.join(" ");
  document.getElementById("wrong-guesses").textContent =
    wrongGuesses.join(", ");
  document.getElementById("attempts-left").textContent = attemptsLeft;
}

// Handle letter guessing
function guessLetter() {
  const letterInput = document.getElementById("letter-input");
  const letter = letterInput.value.toLowerCase();
  letterInput.value = "";

  if (
    letter &&
    !wrongGuesses.includes(letter) &&
    !displayWord.includes(letter)
  ) {
    if (word.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          displayWord[i] = letter;
        }
      }
    } else {
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

// Reset the game with a new word
function resetGame() {
  word = getRandomWord();
  displayWord = Array(word.length).fill("_");
  wrongGuesses = [];
  attemptsLeft = 6;
  updateGameDisplay();
}

// Start the game
updateGameDisplay();

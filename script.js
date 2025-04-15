const importantWords = [
  "honeydew",
  "mango",
  "pineapple",
  "strawberry",
  "apple",
  "banana",
  "grape",
  "kiwi",
  "watermelon",
  "bread",
  "pasta",
  "rice",
  "pizza",
  "sushi",
  "taco",
  "burger",
  "salad",
  "soup",
  "curry",
  "noodle",
  "steak",
  "chicken",
  "fish",
  "shrimp",
  "lobster",
  "crab",
  "egg",
  "cheese",
  "yogurt",
  "butter",
  "cream",
  "milk",
  "chocolate",
  "cookie",
  "cake",
  "pie",
  "pudding",
  "icecream",
  "candy",
  "popcorn",
  "chips",
  "nuts",
  "almond",
  "walnut",
  "peanut",
  "olive",
  "tomato",
  "potato",
  "carrot",
  "onion",
  "garlic",
  "broccoli",
  "spinach",
  "lettuce",
  "cucumber",
  "pepper",
  "mushroom",
  "bean",
  "lentil",
  "chickpea",
  "corn",
  "oat",
  "wheat",
  "barley",
  "quinoa",
  "tofu",
  "tempeh",
  "sausage",
  "bacon",
  "ham",
  "pork",
  "beef",
  "lamb",
  "venison",
  "turkey",
  "duck",
  "salmon",
  "tuna",
  "cod",
  "sardine",
  "avocado",
  "lemon",
  "lime",
  "orange",
  "peach",
  "pear",
  "cherry",
  "blueberry",
  "raspberry",
  "blackberry",
  "fig",
  "date",
  "coconut",
  "pomegranate",
  "squash",
  "zucchini",
  "eggplant",
  "artichoke",
  "asparagus",
  "cabbage"
];
let word = getRandomWord();
let displayWord = Array(word.length).fill("_ ");
let wrongGuesses = [];
let attemptsLeft = 6;

// Pick a random word from the list
function getRandomWord() {
  const index = Math.floor(Math.random() * importantWords.length);
  return importantWords[index];
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

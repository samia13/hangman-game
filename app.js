const letters = "abcdefghijklmnopqrstuvwxyz";

// array of letters
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

/* generate letters */
lettersArray.forEach((letter) => {
  // create span
  let span = document.createElement("span");
  span.className = "letter-box";
  // create text of the span (letter)
  let textNode = document.createTextNode(letter);

  // append textNode to span
  span.appendChild(textNode);

  // append letter to letters container
  lettersContainer.appendChild(span);
});

/* words object */
let words = {
  countries: ["Spain", "Germany", "Italy", "England", "Canada"],
  people: [
    "Tom holland",
    "Tom cruise",
    "Samia mahi",
    "Salima mahi",
    "Abdelkader mahi",
  ],
  movies: ["The maze runner", "The old guards", "Legacies", "Spider man"],
  programming: ["Javascript", "React.js", "Next.js", "PHP", "Java"],
};

// list of categories
let categories = Object.keys(words);

//get a random category
let randomCategory = categories[Math.floor(Math.random() * categories.length)];

// get array of values of the random category
let randomCategoryValues = words[randomCategory];

// get a single value from the array of the random category
let randomValue =
  randomCategoryValues[Math.floor(Math.random() * randomCategoryValues.length)];

let categorySpan = document.querySelector(".category span");
categorySpan.innerHTML = randomCategory;

// convert chosen word to array
let randomValueArray = Array.from(randomValue.toLowerCase());

// select the letters guess container
let lettersGuessContainer = document.querySelector(".letters-guess");

// create spans depending on random Value letters
randomValueArray.forEach((el) => {
  let span = document.createElement("span");
  if (el === " ") {
    span.className = "has-space";
  }

  lettersGuessContainer.appendChild(span);
});

let theDraw = document.querySelector(".the-draw");

let attemps = 0;

// handle click on letters event
let guessSpans = document.querySelectorAll(".letters-guess span");
document.addEventListener("click", (e) => {
  if (e.target.className == "letter-box") {
    e.target.classList.add("clicked");
    let theStatus = false;
    let clickedLetter = e.target.innerHTML;

    randomValueArray.forEach((randomLetter, letterIndex) => {
      if (randomLetter == clickedLetter) {
        theStatus = true;
        guessSpans[letterIndex].innerHTML = randomLetter;
      }
    });

    if (!theStatus) {
      attemps++;
      if (attemps <= 8) {
        theDraw.classList.add(`wrong-${attemps}`);
      } else {
        lettersContainer.classList.add("finished");
        endGame();
      }
    }
  }
});

function endGame() {
  let popup = document.querySelector(".popup");
  let overlay = document.querySelector(".overlay");
  // show game over message and play again button
  let correctAnswer = document.querySelector(".answer");
  correctAnswer.innerHTML = randomValue;
  popup.style.display = "flex";
  overlay.style.display = "block";
}

document.querySelector(".btn-fail").addEventListener("click", function () {
  location.reload();
});

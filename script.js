// script.js

// game class
class Game {
  constructor(fizz, buzz) {
    this.fizz = fizz;
    this.buzz = buzz;
    this.counter = [];
  }

  start() {
    for (let i = 1; i <= 50; i++) {
      if (i % this.fizz === 0 && i % this.buzz === 0) {
        this.counter.push("FizzBuzz");
      } else if (i % this.fizz === 0) {
        this.counter.push("Fizz");
      } else if (i % this.buzz === 0) {
        this.counter.push("Buzz");
      } else {
        this.counter.push(i);
      }
    }
    this.scoreboard(this.counter);
  }

  scoreboard(counter) {
    let i = 0;
    const fizzNumbers = document.createElement("ul");
    while (i < counter.length) {
      const entry = document.createElement("li");
      entry.textContent = counter[i];
      fizzNumbers.appendChild(entry);
      i++;
    }
    results.appendChild(fizzNumbers);
  }
}

// DOM elements
const fizz = document.getElementById("fizz");
const buzz = document.getElementById("buzz");
const submitButton = document.getElementById("submit");
const results = document.querySelector(".results");

// event listeners
submitButton.addEventListener("click", validateInput);
fizz.onkeydown = (e) => {
  if (e.keyCode === 27) {
    clearDOM();
    fizz.value = "";
    buzz.value = "";
  }
};
buzz.onkeydown = (e) => {
  if (e.keyCode === 27) {
    clearDOM();
    fizz.value = "";
    buzz.value = "";
  }
};

// utility functions
function validateInput(e) {
  e.preventDefault();
  if (fizz.value == "" || buzz.value == "") {
    alert("please enter a number value!");
  } else {
    clearDOM();
    const newGame = new Game(fizz.value, buzz.value);
    newGame.start();
  }
}

function clearDOM() {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
}

const hangman_screen = document.getElementById(hangman_screen);
const letters_container = document.getElementById(letters_container);
const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const guesses = 6;
letters_container.innerHTML = 
    letters.map((letter) => 
      `<div>${letter}</div>`
    )
;

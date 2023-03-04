'use strict';

// Selecting elements
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnHold = document.querySelector(`.btn--hold`);
const btnRoll = document.querySelector(`.btn--roll`);
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Starting conditions

const player = document.querySelector(`.player`);

// Function
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
let scores, currentScore, activePlayer, playing;
const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add(`hidden`);
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
init();

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1 : if true, switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Holding dice functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to total score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--0`).textContent = scores[0];
    document.querySelector(`#score--1`).textContent = scores[1];
    // Check for win
    if (scores[activePlayer] >= 100) {
      // Current player wins
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// New game functionality
btnNew.addEventListener('click', init);

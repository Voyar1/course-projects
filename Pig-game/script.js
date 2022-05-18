'use strict';

//my try
// Selecting elements
/*const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScoreEl0 = document.querySelector('#current--0');
const currentScoreEl1 = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;
let score0 = 0;
let score1 = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled 1: if true,
  if (dice !== 1) {
    //Add dice to current score
    if (player0El.classList.contains('player--active')) {
      currentScore0 += dice;
      currentScoreEl0.textContent = currentScore0;
    } else if (player1El.classList.contains('player--active')) {
      currentScore1 += dice;
      currentScoreEl1.textContent = currentScore1;
    }
  } else {
    //switch to next player
    if (player0El.classList.contains('player--active')) {
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
      currentScore0 = 0;
      currentScoreEl0.textContent = currentScore0;
    } else if (player1El.classList.contains('player--active')) {
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');
      currentScore1 = 0;
      currentScoreEl1.textContent = currentScore1;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (player0El.classList.contains('player--active') && currentScore0 > 0) {
    score0 += currentScore0;
    score0El.textContent = score0;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
    currentScore0 = 0;
    currentScoreEl0.textContent = currentScore0;
  } else if (
    player1El.classList.contains('player--active') &&
    currentScore1 > 0
  ) {
    score1 += currentScore1;
    score1El.textContent = score1;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    currentScore1 = 0;
    currentScoreEl1.textContent = currentScore1;
  }
});

btnNew.addEventListener('click', function () {
  let currentScore0 = 0;
  let currentScore1 = 0;
  let score0 = 0;
  let score1 = 0;
  diceEl.classList.add('hidden');
  currentScoreEl0.textContent = currentScore0;
  currentScoreEl1.textContent = currentScore1;
  score0El.textContent = score0;
  score1El.textContent = score1;
});*/
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
//starting conditions

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.Gnerating random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true,
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to nexat player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to acrive player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >=100
    //Finish the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

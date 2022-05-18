'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/

/////Handling click events//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///MY FIRST TRY
// let dice = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function () {
//   if (document.querySelector('.guess').value < dice) {
//     document.querySelector('.message').textContent = 'Too low!';
//     document.querySelector('.score').textContent =
//       Number(document.querySelector('.score').textContent) - 1;
//   } else if (document.querySelector('.guess').value > dice) {
//     document.querySelector('.message').textContent = 'Too high!';
//     document.querySelector('.score').textContent =
//       Number(document.querySelector('.score').textContent) - 1;
//   } else if (document.querySelector('.guess').value == dice) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.message').textContent = 'Guess the number...';
//   document.querySelector('.guess').value = '';
//   dice = Math.trunc(Math.random() * 20) + 1;
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No number';
    //When player wins
    displayMessage('🛑 No number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is diffrent
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
    }
    //When is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too high';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.score').textContent = 'You lost the game!';
    //     }
    //     //When is to low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.score').textContent = 'You lost the game!';
    //     }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Guess the number...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});

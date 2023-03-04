'use strict';

let secret = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const message = function (x) {
  document.querySelector('.message').textContent = x;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('😒 No number');
  } else if (guess === secret) {
    message('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(`.middle-box`).style.width = `16rem`;
    document.querySelector(`.guess`).style.backgroundColor = '#60b347';
    document.querySelector('.middle-box').textContent = secret;
    if (highScore < score) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  } else if (guess !== secret) {
    if (score > 1) {
      message(guess > secret ? 'Try lower!' : 'Try higher!');
      score--;
      document.querySelector('.scoreass').textContent = score;
    } else {
      message('You lost the game');
      document.querySelector('.scoreass').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20 + 1);
  message('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector(`.middle-box`).style.width = `8rem`;
  document.querySelector(`.guess`).style.backgroundColor = '#222';
  document.querySelector('.middle-box').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.scoreass').textContent = score;
});

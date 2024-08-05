'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
const guessText = document.querySelector('.guess');
const secretNumberText = document.querySelector('.number');
const button = document.querySelector('.check');
const body = document.querySelector('body');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessText.value);
  if (!guess) {
    changeText('No number!', messageText);
  } else if (guess === secretNumber) {
    changeText('Correct Number!', messageText);
    changeResultStyle('win');
    checkHighScore();
    changeText(String(secretNumber), secretNumberText);
    button.disabled = true;
  } else if (guess !== secretNumber) {
    changeText(guess > secretNumber ? 'Too high!' : 'Too low!', messageText);
    if (score === 1) {
      changeText('You loss!', messageText);
      changeResultStyle('loss');
      button.disabled = true;
    }
    changeText(String((score -= 1)), scoreText);
  }
});

function changeText(text, textField) {
  textField.textContent = text;
}

function changeResultStyle(result) {
  if (result === 'win') {
    body.style.backgroundColor = '#60b347';
    secretNumberText.style.width = '30rem';
  } else if (result === 'reset') {
    body.style.backgroundColor = '#222';
    secretNumberText.style.width = '15rem';
  }
}

function checkHighScore() {
  if (score > Number(highscoreText.textContent))
    changeText(String(score), highscoreText);
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  changeText(String(score), scoreText);
  button.disabled = false;
  guessText.value = '';
  changeText('?', secretNumberText);
  changeText('Start guessing...', messageText);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  changeResultStyle('reset');
});
